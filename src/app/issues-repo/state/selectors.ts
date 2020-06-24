import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IssuesRepoState} from './state.model';

const getIssuesRepoFeatureState = createFeatureSelector<IssuesRepoState>('issuesRepo');

export const getIssuesRepo = createSelector(
  getIssuesRepoFeatureState,
  state => state.issuesRepo
);
export const getIssuesRepoError = createSelector(
  getIssuesRepoFeatureState,
  state => state.error
);

export const getPageIssuesRepo = createSelector(
  getIssuesRepoFeatureState,
  state => state.page
);

export const getPerPageIssuesRepo = createSelector(
  getIssuesRepoFeatureState,
  state => state.per_page
);
