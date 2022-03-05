import { AnimalImpl } from './AnimalImpl';

export class Cats extends AnimalImpl {

  _kenami: string;

  constructor(name: string, age: number, kenami: string) {
    super();
    this._name = name;
    this._age = age;
    this._kenami = kenami;
  }

  getKenami(): string {
    return this._kenami;
  }

  setKenami(kenami: string) {
    this._kenami = kenami;
  }

  meow(): string {
    return `${this._name}はニャーと鳴いた`;
  };

  getCatsInfo(): string {

    return `このネコの名前は${this._name}です。歳は${this._age}です。毛並みは${this._kenami}です。`;

  }
}