import { Component, OnInit } from '@angular/core';

import { Mensaje } from 'src/app/model/mensaje';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mensaje-list',
  templateUrl: './mensaje-list.component.html',
  styleUrls: ['./mensaje-list.component.css']
})
export class MensajeListComponent implements OnInit {

  mensajes!: Mensaje[];

  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.mensajes = Object.values(this.dataService.getMensaje());
    console.log(this.mensajes);
  }

  addMensaje(mensaje: Mensaje){
    this.dataService.addMensaje(mensaje);
  }


}
