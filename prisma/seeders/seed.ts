import { PrismaClient } from '@prisma/client'
import db from './db.json'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding ...')
  const users = db.users

  for (const user of users) {
    const userCreated = await prisma.users.create({
      data: user,
    })
    console.log(`Create user with id ${userCreated.id}`)
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.log(err)
    await prisma.$disconnect()
    process.exit(1)
  })