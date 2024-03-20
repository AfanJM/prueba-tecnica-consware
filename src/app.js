import express from 'express'
import { envs } from './config/env-config.js'
import { connectMongo } from './config/mysql/mongo-connect.js'
import characterRouter from './presentation/routes/characters.-router.js'

const app = express()
//middleware
app.use(express.json())


//routes
app.use('/api/rick-morty', characterRouter)


//run
const run = async () => {

    connectMongo()
    
    app.listen(envs.PORT, () => {

        console.log('Server running in port: ', envs.PORT)
    })

}

run()
