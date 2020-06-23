import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducer';
import {CommonModule} from '@angular/common';
import {InfoRepoShellComponent} from './containers/input-repo-shell/info-repo-shell.component';
import {InfoRepoComponent} from './components/info-repo/info-repo.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('infoRepo', reducer)
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
