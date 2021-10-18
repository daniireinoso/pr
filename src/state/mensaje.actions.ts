import { Mensaje } from "@serverAPI/mensaje/interface/mensaje.interface";

export class getMensaje {
  static readonly type = '[Mensaje] Get';

}


export class addMensaje {
  static readonly type = '[Mensaje] Add';
  constructor(public payload: Mensaje) { }
}
