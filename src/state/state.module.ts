import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import {NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { MensajeState } from './mensaje.state';
import { environment } from '@envs/environment.prod';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([MensajeState],{
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
})
export class StateModule { }
