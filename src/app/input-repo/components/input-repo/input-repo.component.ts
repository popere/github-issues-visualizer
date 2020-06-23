import { Component, Output, EventEmitter, Input } from '@angular/core';
import {InputRepo} from '../../models/input-repo.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UtilsService} from '../../../shared/services/utils/utils.service';

@Component({
  selector: 'input-repo',
  templateUrl: './input-repo.component.html'
})
export class InputRepoComponent {
  @Input() inputRepo: InputRepo;
  @Output() newInputRepo = new EventEmitter<InputRepo>();


  constructor(private _utilsService: UtilsService) {
  }

  form = new FormGroup({
    githubUrl: new FormControl('', (control) => {
      const inputRepo = this._utilsService.getGitHubURLInput(control.value);
      if (inputRepo) {
        console.log(inputRepo);
        this.newInputRepo.emit(inputRepo);
        return null;
      } else {
        return {error: 'Please enter a correct repository url from GitHub'};
      }
    }),
  });
}
