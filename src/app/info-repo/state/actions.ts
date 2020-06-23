import { Action } from '@ngrx/store';
import {InfoRepo} from '../models/info-repo.model';

export enum InfoRepoActionTypes {
  newInfoRepo = '[InfoRepo] NewRepo'
}

export class NewInfoRepo implements Action {
  readonly type = InfoRepoActionTypes.newInfoRepo;

  constructor(public payload: InfoRepo) { }
}

export type InfoRepoActions = NewInfoRepo;
