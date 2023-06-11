import express from 'express'
import cors from 'cors'
import router from './routes/routes'
import errorHandler from './middlewares/errorHandler'

const allowedOrigins = ['http://localhost:3001'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express()

app.use(cors(options))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('⚡️[server]: Server is running at https://localhost:3000')
})