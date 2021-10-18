import { Body, Controller, Get, Post } from '@nestjs/common';
import { CrearMensajeDto } from './dto/crear-mensaje';
import { Mensaje } from './interface/mensaje.interface';
import { MensajeService } from './mensaje.service';

@Controller('mensaje')
export class MensajeController {
  constructor(private msjService:MensajeService){}

  @Get()
  async all(): Promise<Mensaje[]>{
    return this.msjService.all();
  }

  @Post()
  async add(@Body() mensaje:CrearMensajeDto): Promise<Mensaje>{
    return this.msjService.add(mensaje);
  }
}
