import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IssuesRepoState} from './state.model';

const getIssuesRepoFeatureState = createFeatureSelector<IssuesRepoState>('issuesRepo');

export const getIssuesRepo = createSelector(
  getIssuesRepoFeatureState,
  state => state.issuesRepo
);
