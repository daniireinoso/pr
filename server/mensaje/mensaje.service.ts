import { Injectable } from '@nestjs/common';
import { Mensaje } from '@serverAPI/mensaje/interface/mensaje.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CrearMensajeDto } from '@serverAPI/mensaje/dto/crear-mensaje';

@Injectable()
export class MensajeService {
  constructor(@InjectModel('Mensaje') private readonly mensajeModel: Model<Mensaje>) {}

  async all(): Promise<Mensaje[]> {
    return this.mensajeModel.find();
  }

  async add(mensaje: CrearMensajeDto): Promise<Mensaje> {
    const crearMensaje = new this.mensajeModel(mensaje);
    return crearMensaje.save();
  }

}
