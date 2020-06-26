import { Action } from '@ngrx/store';
import {InputRepo} from '../models/input-repo.model';

export enum InputRepoActionTypes {
  newInputRepo = '[InputRepo] New Repo Input'
}

export class NewInputRepo implements Action {
  readonly type = InputRepoActionTypes.newInputRepo;

  constructor(public payload: InputRepo) { }
}

export type InputRepoActions = NewInputRepo;
