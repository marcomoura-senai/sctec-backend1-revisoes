import 'dotenv/config'
import { createInterface } from 'readline/promises'

import { createUser } from './controller/user.controller'
import { initDatabase } from './database/db'

async function main() {
  await initDatabase()
  const readlineInterface = createInterface(process.stdin, process.stdout)

  const name = await readlineInterface.question('Qual seu nome: ')
  const age = await readlineInterface.question('Qual sua idade: ')
  const cpf = await readlineInterface.question('Qual seu cpf: ')

  console.log(`Você digitou ${name}, e ${age}, e ${cpf}`)

  const result = await createUser({
    cpf,
    name,
    age
  })

  console.log(result.message)

  if (result.user) {
    console.log(result.user.cpf)
  }
}

main().catch(console.error)
