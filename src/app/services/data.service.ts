import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Mensaje } from '@serverAPI/mensaje/interface/mensaje.interface';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private URL_API = '/api/mensaje';
  constructor (private http: HttpClient){}

  getMensaje(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.URL_API);
  }

  addMensaje(mensaje: Mensaje): Observable<Mensaje>{
    const mensajeObj = {
      texto: mensaje.texto,
    }
      return this.http.post<Mensaje>(this.URL_API, mensajeObj);
  }
}
