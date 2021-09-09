require('dotenv').config()
import express from 'express'
import cors from 'cors'
import log from './logger'
import connect from './db/connect'
import routes from './routes'

const app = express()

// @ts-ignore
const port = process.env.PORT as number || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, () => {
    log.info(`Server listening at ${port} port.`)

    connect()

    routes(app)
})