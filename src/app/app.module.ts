import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';

import { AppState } from './store/app.state';
import { AppService } from './providers/app.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApiService } from './providers/fake-api.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // Routing
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,

    (environment.production ? [] : InMemoryWebApiModule.forRoot(FakeApiService, { delay: 0 })),

    NgxsModule.forRoot([AppState]),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'NGXS',
      disabled: environment.production,
      maxAge: 100
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
