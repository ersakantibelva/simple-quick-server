import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json('OK')
})

router.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.users.findMany()
  res.status(200).json(users)
})

router.get('/types', async (req: Request, res: Response) => {
  const tasks = await prisma.tasks.findMany()
  res.status(200).json(tasks)
})

router.post('/types', async (req: Request, res: Response) => {
  const { name } = req.body
  
  const typeCreated = await prisma.types.create({
    data: { name }
  })

  res.status(200).json(typeCreated)
})

export default router