import { Module } from '@nestjs/common';
import { APP_SERVICE, APP_SERVICE2 } from '../services/app-service.interface';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/implementation/app.service';
import { AplloService } from 'src/services/implementation/apllo.service';
import { UserModule } from './user.module';


@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_SERVICE2,
      useClass: AppService
    },
    {
      provide: APP_SERVICE,
      useClass: AplloService
    }
  ],
})
export class AppModule { }