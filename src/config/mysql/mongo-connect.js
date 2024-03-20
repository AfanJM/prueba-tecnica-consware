import mongoose from 'mongoose'
import { envs } from '../env-config.js'
import 'dotenv/config'

export const connectMongo = async ()=>{


    try {
        
       await mongoose.connect( process.env.MONGO_URL)
       

        console.log('connect mongo')

        return true

    } catch (error) {

        console.log(error)
        
    }


}