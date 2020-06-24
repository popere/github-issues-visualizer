import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as inputRepoActions from './actions';
import * as infoRepoActions from '../../info-repo/state/actions';
import {GitHubApiService} from '../../shared/services/github-api/github-api.service';
import {NewInputRepo} from './actions';

@Injectable()
export class InputRepoEffects {

  constructor( private _actions$: Actions, private _gitHubApiService: GitHubApiService ) {
  }

  loadGitHubInfoRepo$ = createEffect(() =>  this._actions$.pipe(
    ofType(inputRepoActions.InputRepoActionTypes.newInputRepo),
    mergeMap((action: NewInputRepo) => {
        return this._gitHubApiService.searchRepoInfo(action.payload.username, action.payload.repositoryName)
          .pipe(
            map(infoRepo => ( new infoRepoActions.NewInfoRepo(infoRepo))),
            catchError(() => of({type: infoRepoActions.InfoRepoActionTypes.newInfoRepoError}))
          );
      }
    )
  ));


}
