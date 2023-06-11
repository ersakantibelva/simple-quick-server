import { Request, Response, NextFunction } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { createToken } from '../helpers/jwt'

const prisma = new PrismaClient()

export default class Controller {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body
      if (!email) throw { code: 400, message: 'Email is Required' }
      if (!password) throw { code: 400, message: 'Password is Required' }

      const user = await prisma.users.findUnique({
        where: {
          email,
        }
      })
      if(!user) throw { code: 401, message: 'Invalid email/password' }

      if (user.password !== password) throw { code: 401, message: 'Invalid email/password' }

      const payload: object = {
        email: user.email
      }
      
      const accessToken: string = createToken(payload)

      res.status(200).json({ accessToken, user: { id: user.id } })
    } catch (error) {
      next(error)
    }
  }

  static async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await prisma.users.findMany()
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }

  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, name } = req.body
      if (!email) throw { code: 400, message: 'Email is Required' }
      if (!password) throw { code: 400, message: 'Password is Required' }
      if (!name) throw { code: 400, message: 'Name is Required' }

      const createUserValidator = (
        email: string,
        password: string,
        name: string,
      ) => {
        return Prisma.validator<Prisma.UsersCreateInput>()({
          email,
          password,
          name
        }) 
      }

      const userCreated = await prisma.users.create({
        data: createUserValidator(
          email,
          password,
          name
        )
      })
    
      res.status(200).json(userCreated)
    } catch (error) {
      next(error)
    }
  }

  static async getTypes(req: Request, res: Response, next: NextFunction) {
    try {
      const types = await prisma.types.findMany()
      res.status(200).json(types)
    } catch (error) {
      next(error)
    }
  }

  static async createType(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body
      
      const typeCreated = await prisma.types.create({
        data: { name }
      })
    
      res.status(200).json(typeCreated)
    } catch (error) {
      next(error)
    }
  }

  static async getTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await prisma.tasks.findMany()
      res.status(200).json(tasks)
    } catch (error) {
      next(error)
    }
  }

  static async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, dueDate, TypesId, authorId } = req.body

      const newTask = await prisma.tasks.create({
        data: {
          title,
          dueDate,
          Types: { connect: { id: TypesId } },
          author: { connect: { id: authorId } }
        }
      })

      res.status(200).json({ message: 'Task successfully created', task: newTask })
    } catch (error) {
      next(error)
    }
  }

  static async showTask(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error)
    }
  }

  static async updateTask(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error)
    }
  }

  static async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(error)
    }
  }
}