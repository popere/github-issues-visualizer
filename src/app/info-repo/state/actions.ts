import { Action } from '@ngrx/store';
import {InfoRepo} from '../models/info-repo.model';

export enum InfoRepoActionTypes {
  newInfoRepo = '[InfoRepo] NewRepo',
  newInfoRepoError = '[InfoRepo] NewRepoError',
  resetInfoRepoError = '[InfoRepo] RepoError Reset'
}

export class NewInfoRepo implements Action {
  readonly type = InfoRepoActionTypes.newInfoRepo;

  constructor(public payload: InfoRepo) { }
}
export class NewInfoRepoError implements Action {
  readonly type = InfoRepoActionTypes.newInfoRepoError;

  constructor(public payload: void) { }
}
export class NewInfoRepoErrorReset implements Action {
  readonly type = InfoRepoActionTypes.resetInfoRepoError;

  constructor(public payload: void) { }
}


export type InfoRepoActions = NewInfoRepo | NewInfoRepoError | NewInfoRepoErrorReset;
