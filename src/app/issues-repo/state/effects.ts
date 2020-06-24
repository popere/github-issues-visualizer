import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as infoRepoActions from '../../info-repo/state/actions';
import * as issuesRepoActions from '../../issues-repo/state/actions';
import {GitHubApiService} from '../../shared/services/github-api/github-api.service';
import {NewIssuesPageLoaded, NewIssuesPageToLoad} from './actions';
import {NewInfoRepo} from '../../info-repo/state/actions';

@Injectable()
export class IssuesRepoEffects {

  constructor( private _actions$: Actions, private _gitHubApiService: GitHubApiService ) {
  }

  loadGitHubIssuesFromNewRepo$ = createEffect(() =>  this._actions$.pipe(
    ofType(infoRepoActions.InfoRepoActionTypes.newInfoRepo),
    mergeMap((action: NewInfoRepo) => {
        if (action.payload.open_issues > 0) {
          return  this._gitHubApiService.getIssues(action.payload.owner.login, action.payload.name, 0, 10)
            .pipe(
              map(issues => ( new NewIssuesPageLoaded({issues, page: 0, per_page: 10}))),
              catchError(() => of({type: issuesRepoActions.IssuesRepoActionTypes.newIssuesPageErrorLoading}))
            );
        } else {
          return  of({type: issuesRepoActions.IssuesRepoActionTypes.noIssuesToLoad});
        }
    })
  ));

  loadOtherPageGitHubIssues$ = createEffect(() =>  this._actions$.pipe(
    ofType(issuesRepoActions.IssuesRepoActionTypes.newIssuesPageToLoad),
    mergeMap((action: NewIssuesPageToLoad) => {
        return  this._gitHubApiService
          .getIssues(
            action.payload.username,
            action.payload.repo_name,
            action.payload.page,
            action.payload.per_page)
          .pipe(
            map(issues => ( new NewIssuesPageLoaded({issues, page: action.payload.page, per_page: action.payload.per_page}))),
            catchError(() => of({type: issuesRepoActions.IssuesRepoActionTypes.newIssuesPageErrorLoading}))
          );
    })
  ));


}
