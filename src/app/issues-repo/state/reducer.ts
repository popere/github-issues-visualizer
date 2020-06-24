import { IssuesRepoActions, IssuesRepoActionTypes } from './actions';
import {IssuesRepoState} from './state.model';

export const initialState: IssuesRepoState = { issuesRepo: [], page: 0, per_page: 10, error: false };

export function reducer(state = initialState, action: IssuesRepoActions): IssuesRepoState {

  switch (action.type) {
    case IssuesRepoActionTypes.newIssuesPageLoaded:
      return {
        ...state,
        issuesRepo: [...action.payload.issues],
        page: action.payload.page,
        per_page: action.payload.per_page,
        error: false
      };
    case IssuesRepoActionTypes.newIssuesPageErrorLoading:
      return {
        ...state,
        issuesRepo: [],
        error: true
      };
    case IssuesRepoActionTypes.noIssuesToLoad:
      return {
        ...state,
        issuesRepo: null
      };

    default:
      return state;
  }
}
