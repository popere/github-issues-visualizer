import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as infoRepoSelectors from './../../state/selectors';
import {InfoRepo} from '../../models/info-repo.model';
import {InfoRepoState} from '../../state/state.model';

@Component({
  selector: 'info-repo-shell',
  templateUrl: './info-repo-shell.component.html',
})
export class InfoRepoShellComponent {
  infoRepo$: Observable<InfoRepo>;

  constructor(private _store: Store<InfoRepoState>) {
    this.infoRepo$ = _store.pipe(select(infoRepoSelectors.getInfoRepo));
  }
}
