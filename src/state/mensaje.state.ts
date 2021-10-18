import { Injectable } from '@angular/core';
import { Mensaje } from '@serverAPI/mensaje/interface/mensaje.interface';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { DataService } from '@app/services/data.service';
import { addMensaje, getMensaje } from './mensaje.actions';
import { tap } from "rxjs/operators";

export class MensajeStateModel {
  public mensajes!: Mensaje[];

}

@State<MensajeStateModel>({
  name: 'mensaje',
  defaults:{
    mensajes: [],

  },
})


@Injectable()
export class MensajeState {

  constructor(private readonly msjService: DataService) {}

  @Selector()
  public static getMensajelist({mensajes}: MensajeStateModel){
    return mensajes;
  }

  @Action(getMensaje)
  getMensaje({ getState, setState }: StateContext<MensajeStateModel>) {
    this.msjService.getMensaje().pipe(
      tap((mensajes) => {
        const state = getState();
        setState({ ...state, mensajes });
      })
    );
  }

  @Action(addMensaje)
  addMensaje(
    { getState, patchState }: StateContext<MensajeStateModel>,
    { payload }: addMensaje ) {
    return this.msjService.addMensaje(payload).pipe(
      tap((mensajes) => {
        const state = getState();
        patchState({
          mensajes: [...state.mensajes, mensajes],
        });
      })
    );
  }


}
