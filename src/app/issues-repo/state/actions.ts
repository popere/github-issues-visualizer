import { Action } from '@ngrx/store';
import {IssueRepo} from '../models/issue-repo.model';

export enum IssuesRepoActionTypes {
  newIssuesRepo = '[IssuesRepo] New Issues'
}

export class NewIssuesRepo implements Action {
  readonly type = IssuesRepoActionTypes.newIssuesRepo;

  constructor(public payload: IssueRepo[]) { }
}

export type IssuesRepoActions = NewIssuesRepo;
