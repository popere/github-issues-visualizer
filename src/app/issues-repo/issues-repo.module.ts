import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {IssuesRepoShellComponent} from './containers/issues-repo-shell/issues-repo-shell.component';
import {IssuesRepoComponent} from './components/issues-repo/issues-repo.component';
import {IssuesRepoEffects} from './effects/effects';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('issuesRepo', reducer),
    EffectsModule.forFeature([IssuesRepoEffects]),
    MatCardModule,
    MatPaginatorModule,
    MatExpansionModule,
  ],
  exports: [
    IssuesRepoShellComponent
  ],
  declarations: [
    IssuesRepoShellComponent,
    IssuesRepoComponent
  ]
})
export class IssuesRepoModule { }
