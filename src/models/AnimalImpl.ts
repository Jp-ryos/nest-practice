import { Animal } from './Animals';

export class AnimalImpl implements Animal {

  _name: string;
  _age: number;

  getName(): string {
    return this._name;
  }

  getAge(): number {
    return this._age;
  }

  setName(name: string): void {
    this._name = name;
  }

  setAge(age: number): void {
    this._age = age;
  }
}