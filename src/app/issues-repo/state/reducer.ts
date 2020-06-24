import { IssuesRepoActions, IssuesRepoActionTypes } from './actions';
import {IssuesRepoState} from './state.model';

export const initialState: IssuesRepoState = { issuesRepo: [] };

export function reducer(state = initialState, action: IssuesRepoActions): IssuesRepoState {

  switch (action.type) {
    case IssuesRepoActionTypes.newIssuesRepo:
      return {
        ...state,
        issuesRepo: [...action.payload]
      };

    default:
      return state;
  }
}
