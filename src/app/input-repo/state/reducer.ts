import { InputRepoActions, InputRepoActionTypes } from './actions';
import {InputRepoState} from './state.model';

export const initialState: InputRepoState = { inputRepo: null };

export function reducer(state = initialState, action: InputRepoActions): InputRepoState {

  switch (action.type) {
    case InputRepoActionTypes.newInputRepo:
      return {
        ...state,
        inputRepo: Object.assign({}, action.payload)
      };

    default:
      return state;
  }
}
