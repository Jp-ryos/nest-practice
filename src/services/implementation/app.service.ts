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

  getMeow(): string {
    let neko: Cats = new Cats('ぺこ', 2, 'こげ茶');
    return neko.meow();
  }

  getCatsInfo(): string {
    let nuko: Cats = new Cats('ぺこ', 2, 'こげ茶');
    return nuko.getCatsInfo();
  }
}
