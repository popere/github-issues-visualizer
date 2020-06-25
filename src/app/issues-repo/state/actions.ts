import { Action } from '@ngrx/store';
import {IssueRepo} from '../models/issue-repo.model';

export enum IssuesRepoActionTypes {
  newIssuesPageToLoad = '[IssuesRepo] New Issues Page To Load',
  newIssuesPageLoaded = '[IssuesRepo] New Issues Page Loaded',
  newIssuesPageErrorLoading = '[IssuesRepo] Error Getting Issues Page',
  noIssuesToLoad = '[IssuesRepo] No Issues To Load'
}

export class NewIssuesPageLoaded implements Action {
  readonly type = IssuesRepoActionTypes.newIssuesPageLoaded;

  constructor(public payload: {issues: IssueRepo[], page: number, per_page: number}) { }
}
export class NewIssuesPageError implements Action {
  readonly type = IssuesRepoActionTypes.newIssuesPageErrorLoading;

  constructor() { }
}

export class NewIssuesPageToLoad implements Action {
  readonly type = IssuesRepoActionTypes.newIssuesPageToLoad;

  constructor(public payload: {repo_name: string, username: string, page: number, per_page: number}) { }
}

export class NoIssuesToLoad implements Action {
  readonly type = IssuesRepoActionTypes.noIssuesToLoad;

  constructor() { }
}

export type IssuesRepoActions = NewIssuesPageLoaded | NewIssuesPageToLoad | NewIssuesPageError | NoIssuesToLoad;
