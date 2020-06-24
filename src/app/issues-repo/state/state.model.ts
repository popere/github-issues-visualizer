import {IssueRepo} from '../models/issue-repo.model';

export interface IssuesRepoState {
  issuesRepo: IssueRepo[];
  page: number;
  per_page: number;
  error: boolean;
}
