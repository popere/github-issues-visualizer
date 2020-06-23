import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {InputRepo} from '../../models/input-repo.model';
import {InputRepoState} from '../../state/state.model';
import * as inputRepoSelectors from './../../state/selectors';
import * as inputRepoAction from './../../state/actions';

@Component({
  selector: 'input-repo-shell',
  templateUrl: './input-repo-shell.component.html',
})
export class InputRepoShellComponent {
  inputRepo$: Observable<InputRepo>;

  constructor(private _store: Store<InputRepoState>) {
    this.inputRepo$ = _store.pipe(select(inputRepoSelectors.getInputRepo));
  }

  newInputRepo(inputRepo: InputRepo) {
    this._store.dispatch(new inputRepoAction.NewInputRepo(inputRepo));
  }
}
