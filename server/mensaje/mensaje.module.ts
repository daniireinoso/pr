import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MensajeController } from './mensaje.controller';
import { MensajeService } from './mensaje.service';
import { MensajeSchema } from './schemas/mensaje.schema';

@Module({
    imports:[MongooseModule.forFeature([{name: Mensaje, schema: MensajeSchema}])],
    controllers: [MensajeController],
    providers: [MensajeService],
})
export class MensajeModule {

}
