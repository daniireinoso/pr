import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';

import { MensajeModule } from './mensaje/mensaje.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/mensajes-app/browser'),
    }),
    MongooseModule.forRoot(`mongodb://localhost:27017/mensajes_app`,{
      userNewUrlParser: true,
      userUnifiedTopology: true,
    }),
    MensajeModule,
  ],

})
export class AppModule {}
