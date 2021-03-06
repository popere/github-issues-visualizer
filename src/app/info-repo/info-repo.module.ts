import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';
import {CommonModule} from '@angular/common';
import {InfoRepoShellComponent} from './containers/input-repo-shell/info-repo-shell.component';
import {InfoRepoComponent} from './components/info-repo/info-repo.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('infoRepo', reducer),
    MatCardModule
  ],
  exports: [
    InfoRepoShellComponent
  ],
  declarations: [
    InfoRepoShellComponent,
    InfoRepoComponent
  ]
})
export class InfoRepoModule { }
