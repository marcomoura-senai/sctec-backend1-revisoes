import { User } from '../model/user'
import * as service from '../service/user.service'

interface CreateUserReq {
  name: string
  age: string
  cpf: string
}

export async function createUser(
  user: CreateUserReq
): Promise<{ message: string; user?: User }> {
  if (Number.isNaN(Number(user.age))) {
    return {
      message: 'Invalid age'
    }
  }

  const age = Number(user.age)

  const result = await service
    .createUser({
      name: user.name,
      age: age,
      cpf: user.cpf
    })
    .catch((err: unknown) => err as Error)

  if (result instanceof Error) {
    return {
      message: result.message
    }
  }

  return {
    message: 'User created successfully',
    user: result
  }
}
