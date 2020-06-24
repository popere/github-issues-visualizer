import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducer';
import {CommonModule} from '@angular/common';
import {InfoRepoShellComponent} from './containers/input-repo-shell/info-repo-shell.component';
import {InfoRepoComponent} from './components/info-repo/info-repo.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('infoRepo', reducer),
    MatCardModule,
    MatChipsModule
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
