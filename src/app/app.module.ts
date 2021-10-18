import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StateModule } from '@store/state.module';

import { MensajeComponent } from './components/mensaje/mensaje.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeListComponent } from './components/mensaje-list/mensaje-list.component';
import { MensajeAddComponent } from './components/mensaje-add/mensaje-add.component';
import { MensajeModule } from '@serverAPI/mensaje/mensaje.module';
import { MensajeSchema } from '@serverAPI/mensaje/schemas/mensaje.schema';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MensajeListComponent,
    MensajeAddComponent,
    MensajeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
