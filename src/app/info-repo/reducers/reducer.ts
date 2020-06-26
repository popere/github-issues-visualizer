import { InfoRepoActions, InfoRepoActionTypes } from '../actions/actions';
import {InfoRepoState} from '../models/state.model';

export const initialState: InfoRepoState = { infoRepo: null, error: false };

export function reducer(state = initialState, action: InfoRepoActions): InfoRepoState {

  switch (action.type) {
    case InfoRepoActionTypes.newInfoRepo:
      return {
        ...state,
        error: false,
        infoRepo: Object.assign({}, action.payload)
      };
      case InfoRepoActionTypes.newInfoRepoError:
      return {
        ...state,
        error: true,
        infoRepo: null
      };
      case InfoRepoActionTypes.resetInfoRepoError:
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
}
