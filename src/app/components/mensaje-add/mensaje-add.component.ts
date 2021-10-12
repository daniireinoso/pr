import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Mensaje } from '../../model/mensaje';

@Component({
  selector: 'app-mensaje-add',
  templateUrl: './mensaje-add.component.html',
  styleUrls: ['./mensaje-add.component.css']
})
export class MensajeAddComponent implements OnInit {
  texto!: string;

  @Output() mensajeAdded = new EventEmitter<Mensaje>();

  constructor() { }

  ngOnInit(){
  }

  addMensaje(){
    this.mensajeAdded.emit({
      texto: this.texto
    });
    //this.texto = '';
  }
}
