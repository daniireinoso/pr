import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeListComponent } from '../mensaje-list/mensaje-list.component';
import { MensajeAddComponent } from '../mensaje-add/mensaje-add.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MensajeController } from '@serverAPI/mensaje/mensaje.controller';
import { MensajeComponent } from './mensaje.component';


@NgModule({
  declarations: [
    MensajeComponent,

    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,


  ],
  exports: [

],

})
export class MensajeModule { }
