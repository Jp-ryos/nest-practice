import { Module } from '@nestjs/common';
import { APP_SERVICE } from '../services/app-service.interface';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/implementation/app.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_SERVICE,
      useClass: AppService
    }
  ],
})
export class AppModule { }