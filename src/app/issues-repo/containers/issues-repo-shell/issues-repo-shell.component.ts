import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {IssuesRepoState} from '../../state/state.model';
import {IssueRepo} from '../../models/issue-repo.model';
import * as issuesRepoSelectors from './../../state/selectors';

@Component({
  selector: 'issues-repo-shell',
  templateUrl: './issues-repo-shell.component.html',
})
export class IssuesRepoShellComponent {
  issuesRepo$: Observable<IssueRepo[]>;

  constructor(private _store: Store<IssuesRepoState>) {
    this.issuesRepo$ = _store.pipe(select(issuesRepoSelectors.getIssuesRepo));
  }


}
