export class User {
  id: number

  cpf: string

  name: string

  age: number

  constructor({ id, cpf, name, age }: User) {
    this.id = id
    this.cpf = cpf
    this.name = name
    this.age = age
  }
}
