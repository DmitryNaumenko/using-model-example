export class User {
  public name: string;
  public type: string;
  public age: number;
  private birth: number;

  constructor(name: string, type: string, age: number) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.birth = this.setBirth(age);
  }

  setBirth = (age: number): number =>  2018 - age;
}

