import { createFeatureSelector, createSelector } from '@ngrx/store';
import {InputRepoState} from './state.model';

const getInputRepoFeatureState = createFeatureSelector<InputRepoState>('inputRepo');

export const getInputRepo = createSelector(
  getInputRepoFeatureState,
  state => state.inputRepo
);
