import { Animal } from 'src/models/Animals';

export const APP_SERVICE = 'APPPP SERVICE';

export interface AppServiceInterface {
  getHello(): string;
  getAnimal(): Animal;
  getMeow(): string;
  getCatsInfo(): string;
}