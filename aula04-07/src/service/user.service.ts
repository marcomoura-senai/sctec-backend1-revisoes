import { findUserByCpf, insertUser } from '../repositories/user.repository'

export interface CreateUserDto {
  name: string
  age: number
  cpf: string
}
export async function createUser(user: CreateUserDto) {
  const existingUser = await findUserByCpf(user.cpf)

  if (existingUser) {
    throw new Error('User already exists')
  }

  return await insertUser(user)
}
