export interface Animal {
  _name: string;
  _age: number;

  getName(): string;
  getAge(): number;
  setName(name: string): void;
  setAge(age: number): void;
}