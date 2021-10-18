import { Component, OnInit } from '@angular/core';
import { Select, Selector, Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { Mensaje } from '@serverAPI/mensaje/interface/mensaje.interface';
import { MensajeState } from '@store/mensaje.state';
import { DataService } from '@app/services/data.service';
import { getMensaje } from '@store/mensaje.actions';

@Component({
  selector: 'app-mensaje-list',
  templateUrl: './mensaje-list.component.html',
  styleUrls: ['./mensaje-list.component.css']
})

export class MensajeListComponent implements OnInit {

  @Select(MensajeState.getMensajelist)
  mensajes$!: Observable<Mensaje[]>;

  constructor(private store: Store) { }

  ngOnInit(): void{

    this.store.dispatch(new getMensaje());

  }

}
