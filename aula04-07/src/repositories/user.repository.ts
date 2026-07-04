import { pool } from '../database/db'
import { User } from '../model/user'
import { CreateUserDto } from '../service/user.service'

export async function insertUser(user: CreateUserDto): Promise<User> {
  const {
    rows: [result]
  } = await pool.query<User>(
    'INSERT INTO users (name, age, cpf) VALUES ($1, $2, $3) RETURNING *',
    [user.name, user.age, user.cpf]
  )

  return result
}

export async function findUserByCpf(cpf: string): Promise<User | null> {
  const result = await pool.query<User>('SELECT * FROM users WHERE cpf = $1', [
    cpf
  ])

  if (result.rows.length === 0) {
    return null
  }

  return result.rows[0]
}
