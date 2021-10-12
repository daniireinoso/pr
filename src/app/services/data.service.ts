import { Injectable } from '@angular/core';

import { Mensaje } from '../model/mensaje';

@Injectable()

export class DataService {
  listaMsj: Array<Mensaje> = [];
  aux: Array<Mensaje> = [];

  constructor() {
    this.listaMsj = []
   }

   getMensaje(): Mensaje[]{
     if(localStorage.getItem('mensajes') === null){
       this.listaMsj = [];
     } else {
       this.listaMsj = JSON.parse(localStorage.getItem('mensajes')!);
     }
     return this.listaMsj;
   }

   addMensaje(mensaje: Mensaje){
     let revisando = localStorage.getItem('mensajes');
    if(revisando == null){
      localStorage.setItem('mensajes', JSON.stringify(mensaje));
    } else {
      let data = Object.values(JSON.parse(revisando))
      console.log(data);
      let nuevoMsj = Object.values(mensaje);
      console.log(nuevoMsj);
      data.push(nuevoMsj);
      localStorage.setItem('mensajes', JSON.stringify(data))
    }
    console.log(localStorage.getItem('mensajes'));
   }
}
