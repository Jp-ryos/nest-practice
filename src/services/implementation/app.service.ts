import { Injectable } from '@nestjs/common';
import { AppServiceInterface } from '../app-service.interface';
import { Animal } from '../../models/Animals';
import { Cats } from 'src/models/Cats';


@Injectable()
export class AppService implements AppServiceInterface {
  getHello(): string {
    return 'Hello World!';
  }

  getAnimal(): Animal {
    let animal: Cats = new Cats('ぺこ', 2, 'こげ茶');
    return animal;
  }
}
