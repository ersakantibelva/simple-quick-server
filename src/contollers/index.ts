import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default class Controller {
  static async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.users.findMany()
      res.status(200).json(users)
    } catch (error) {
      console.log(error)
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { email, password, name } = req.body
      const userCreated = await prisma.users.create({
        data: {
          email,
          password,
          name,
        }
      })
    
      res.status(200).json(userCreated)
    } catch (error) {
      console.log(error)
    }
  }

  static async getTypes(req: Request, res: Response) {
    try {
      const types = await prisma.types.findMany()
      res.status(200).json(types)
    } catch (error) {
      console.log(error)
    }
  }

  static async createType(req: Request, res: Response) {
    try {
      const { name } = req.body
      
      const typeCreated = await prisma.types.create({
        data: { name }
      })
    
      res.status(200).json(typeCreated)
    } catch (error) {
      console.log(error)
    }
  }

  static async getTasks(req: Request, res: Response) {
    try {
      const tasks = await prisma.tasks.findMany()
      res.status(200).json(tasks)
    } catch (error) {
      console.log(error)
    }
  }

  static async createTask(req: Request, res: Response) {
    try {
      const { title, description, dueDate, isCompleted, TypeId } = req.body
    } catch (error) {
      console.log(error)
    }
  }

  static async showTask(req: Request, res: Response) {
    try {

    } catch (error) {
      console.log(error)
    }
  }

  static async updateTask(req: Request, res: Response) {
    try {

    } catch (error) {
      console.log(error)
    }
  }

  static async deleteTask(req: Request, res: Response) {
    try {

    } catch (error) {
      console.log(error)
    }
  }
}