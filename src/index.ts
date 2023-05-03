import express from 'express'
import router from './routes/routes'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('⚡️[server]: Server is running at https://localhost:3000')
})