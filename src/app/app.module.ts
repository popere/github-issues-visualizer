import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {InputRepoModule} from './input-repo/input-repo.module';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {InfoRepoModule} from './info-repo/info-repo.module';
import {IssuesRepoModule} from './issues-repo/issues-repo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'GitHub Issues Visualizer',
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule,
    InputRepoModule,
    InfoRepoModule,
    IssuesRepoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
