import { Controller, Get, Inject } from '@nestjs/common';
import { Animal } from 'src/models/Animals';
import { isNumberObject } from 'util/types';
import { AppServiceInterface, APP_SERVICE } from '../services/app-service.interface';
import { AppService } from '../services/implementation/app.service';

@Controller()
export class AppController {
  constructor(@Inject(APP_SERVICE) private readonly _appService: AppServiceInterface) { }

  @Get()
  getHello(): string {
    return this._appService.getHello();
  }

  @Get('/animal')
  getAnimal(): Animal {
    return this._appService.getAnimal();
  }

  @Get('/animal/cat/meow')
  getMeow(): string {
    return this._appService.getMeow();
  }

  @Get('/animal/info')
  getInfo(): string {
    return this._appService.getCatsInfo();
  }

}
