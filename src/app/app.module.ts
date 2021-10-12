import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeAddComponent } from './components/mensaje-add/mensaje-add.component';
import { MensajeListComponent } from './components/mensaje-list/mensaje-list.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MensajeAddComponent,
    MensajeListComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
