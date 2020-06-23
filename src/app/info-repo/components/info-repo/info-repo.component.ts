import { Component, Input } from '@angular/core';
import {InfoRepo} from '../../models/info-repo.model';

@Component({
  selector: 'info-repo',
  templateUrl: './info-repo.component.html'
})
export class InfoRepoComponent {
  @Input() infoRepo: InfoRepo;
}
