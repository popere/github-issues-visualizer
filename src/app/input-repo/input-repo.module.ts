import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';
import {InputRepoComponent} from './components/input-repo/input-repo.component';
import {InputRepoShellComponent} from './containers/input-repo-shell/input-repo-shell.component';
import {EffectsModule} from '@ngrx/effects';
import {InputRepoEffects} from './effects/effects';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('inputRepo', reducer),
    EffectsModule.forFeature([InputRepoEffects]),
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    InputRepoShellComponent
  ],
  declarations: [
    InputRepoShellComponent,
    InputRepoComponent
  ]
})
export class InputRepoModule { }
