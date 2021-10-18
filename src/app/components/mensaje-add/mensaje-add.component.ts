import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { addMensaje } from '@store/mensaje.actions';
import { Mensaje } from '@serverAPI/mensaje/interface/mensaje.interface';

@Component({
  selector: 'app-mensaje-add',
  templateUrl: './mensaje-add.component.html',
  styleUrls: ['./mensaje-add.component.css']
})
export class MensajeAddComponent implements OnInit {
  public mensajeForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.crearForm();
   }

  ngOnInit(): void{
  }

  onSave(mensaje: Mensaje){
    this.store.dispatch(new addMensaje(mensaje));
    this.mensajeForm.reset();
  }


  private crearForm(){
    this.mensajeForm= this.fb.group({
      texto:[''],
    });
  }

}
