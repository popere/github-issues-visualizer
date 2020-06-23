import { InfoRepoActions, InfoRepoActionTypes } from './actions';
import {InfoRepoState} from './state.model';

export const initialState: InfoRepoState = { infoRepo: null };

export function reducer(state = initialState, action: InfoRepoActions): InfoRepoState {

  switch (action.type) {
    case InfoRepoActionTypes.newInfoRepo:
      return {
        ...state,
        infoRepo: Object.assign({}, action.payload)
      };

    default:
      return state;
  }
}
