import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {IssuesRepoState} from '../../state/state.model';
import {IssueRepo} from '../../models/issue-repo.model';
import * as issuesRepoSelectors from './../../state/selectors';
import * as issuesRepoAction from './../../state/actions';
import * as infoRepoSelectors from '../../../info-repo/state/selectors';
import {InfoRepo} from '../../../info-repo/models/info-repo.model';

@Component({
  selector: 'issues-repo-shell',
  templateUrl: './issues-repo-shell.component.html',
})
export class IssuesRepoShellComponent {
  issuesRepo$: Observable<IssueRepo[]>;
  pageIssues$: Observable<number>;
  perPageIssues$: Observable<number>;
  infoRepo$: Observable<InfoRepo>;
  errorIssues$: Observable<boolean>;

  constructor(private _store: Store<IssuesRepoState>) {
    this.infoRepo$ = _store.pipe(select(infoRepoSelectors.getInfoRepo));
    this.issuesRepo$ = _store.pipe(select(issuesRepoSelectors.getIssuesRepo));
    this.pageIssues$ = _store.pipe(select(issuesRepoSelectors.getPageIssuesRepo));
    this.perPageIssues$ = _store.pipe(select(issuesRepoSelectors.getPerPageIssuesRepo));
    this.errorIssues$ = _store.pipe(select(issuesRepoSelectors.getIssuesRepoError));
  }

  /**
   * Method to dispatch an action to load a new issue page
   * @param params pagination and repository information
   */
  newPageToLoad(params: {repo_name: string, username: string, page: number, per_page: number}) {
    this._store.dispatch(new issuesRepoAction.NewIssuesPageToLoad(params));
  }
}
