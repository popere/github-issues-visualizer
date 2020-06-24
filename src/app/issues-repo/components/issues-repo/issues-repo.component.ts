import { Component, Output, EventEmitter, Input } from '@angular/core';
import {IssueRepo} from '../../models/issue-repo.model';

@Component({
  selector: 'issues-repo',
  templateUrl: './issues-repo.component.html',
  styleUrls: ['./issues-repo.component.scss']

})
export class IssuesRepoComponent {
  @Input() issuesRepo: IssueRepo[];
  /*@Input() pageLoaded: number; //TODO despues sera un objeto Pagina :)
  @Output() nextPageLoad = new EventEmitter<void>();*/


  constructor() {
  }
}
