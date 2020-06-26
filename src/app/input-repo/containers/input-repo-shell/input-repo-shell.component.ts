import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {InputRepo} from '../../models/input-repo.model';
import {InputRepoState} from '../../models/state.model';
import * as inputRepoSelectors from '../../selectors/selectors';
import * as inputRepoAction from '../../actions/actions';
import * as infoRepoAction from '../../../info-repo/actions/actions';

@Component({
  selector: 'input-repo-shell',
  templateUrl: './input-repo-shell.component.html',
})
export class InputRepoShellComponent {
  inputRepo$: Observable<InputRepo>;

  constructor(private _store: Store<InputRepoState>) {
    this.inputRepo$ = _store.pipe(select(inputRepoSelectors.getInputRepo));
  }

  /**
   * Method to dispatch actions
   * @param inputRepo repository name and username information
   */
  newInputRepo(inputRepo: InputRepo) {
    if (inputRepo) {
      this._store.dispatch(new inputRepoAction.NewInputRepo(inputRepo));
    } else {
      this._store.dispatch(new infoRepoAction.NewInfoRepoErrorReset());
    }
  }
}
