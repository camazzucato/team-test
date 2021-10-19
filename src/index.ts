import express from 'express'
import cors from 'cors'
import routes from './routes/routes'

const { PORT } = process.env
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`\n 🚀 [ API ] Flying High on port ${PORT}! \n`)
})

export default app
