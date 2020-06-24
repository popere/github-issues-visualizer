import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as infoRepoActions from '../../info-repo/state/actions';
import {GitHubApiService} from '../../shared/services/github-api/github-api.service';
import {NewIssuesRepo} from './actions';
import {NewInfoRepo} from '../../info-repo/state/actions';

@Injectable()
export class IssuesRepoEffects {

  constructor( private _actions$: Actions, private _gitHubApiService: GitHubApiService ) {
  }


  loadGitHubIssues$ = createEffect(() =>  this._actions$.pipe(
    ofType(infoRepoActions.InfoRepoActionTypes.newInfoRepo),
    mergeMap((action: NewInfoRepo) => {
        console.log('action in effect', action);
        return  this._gitHubApiService.getIssues(action.payload.owner.login, action.payload.name)
          .pipe(
            map(issues => ( new NewIssuesRepo(issues))),
            //TODO gestion de errores
            catchError(() => of({type: '[GitHub Repo] Repo LoadedError'}))
          );
      }
    )
  ));


}
