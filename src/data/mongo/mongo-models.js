import mongoose, { mongo } from 'mongoose'


const charactersSchema = new mongoose.Schema({


    nombre: {
        type: String,
        require: true
    }, 

    origen: {
        type: String,
        require: true
    },

    estado: {
        type: Boolean,
        default: true
    }, 
    edad: {
        type: Number,
        require:true
    }


})


const characterModel = mongoose.model('Characters', charactersSchema)

export default characterModel