import { createFeatureSelector, createSelector } from '@ngrx/store';
import {InfoRepoState} from '../models/state.model';

const getInfoRepoFeatureState = createFeatureSelector<InfoRepoState>('infoRepo');

export const getInfoRepo = createSelector(
  getInfoRepoFeatureState,
  state => state.infoRepo
);

export const getInfoRepoError = createSelector(
  getInfoRepoFeatureState,
  state => state.error
);
