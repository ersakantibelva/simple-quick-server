import { Request, Response, NextFunction } from "express"
import { Prisma } from "@prisma/client"

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction):void => {
  let code: number = 500
  let message: string = 'Internal Server Error'
  console.log(err)

  if (err instanceof Prisma.PrismaClientValidationError) {
    code = 400
    message = err.message
  }
  
  switch (err.code) {
    case 400:
    case 401:
      code = err.code
      message = err.message
      break;
  
    default:
      break;
  }

  res.status(code).json({ message })
}

export default errorHandler