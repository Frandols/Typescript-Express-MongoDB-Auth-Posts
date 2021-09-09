import express from 'express'
import config from 'config'
import cors from 'cors'
import log from './logger'
import connect from './db/connect'
import routes from './routes'

const app = express()

const host = config.get('host') as string
const port = config.get('port') as number

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`)

    connect()

    routes(app)
})