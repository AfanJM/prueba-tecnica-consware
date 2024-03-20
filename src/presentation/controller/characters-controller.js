import Models from '../../data/mongo/mongo-models.js'
import {response, request} from 'express'




export const getAll = async (req, res) => {

    const characters = await Models.find()

    const total = await Models.countDocuments(characters)

    if(!characters) return res.status(404).json({msg: 'Characters not found :('})

    return res.status(200).json({Total: total, data: characters})


}


export const getById = async (req, res) => {

    const {id} = req.params

    const characterById = await Models.findById( id )

    if(!characterById) return res.status(404).json({msg: 'Characters not found :('})

    return res.status(200).json({data: characterById})
}


export const create = async (req = request, res = response) => {


    const {nombre, origen, estado, edad} = req.body

    const character = new Models({
        nombre,
        origen,
        estado,
        edad

    })

    await character.save()

    return res.status(200).json({msg: 'character created'})

}

export const updateCharacter = async (req, res) => {

    const {id} = req.params

    const {_id, estado, ...resto} = req.body

    const update = await Models.findByIdAndUpdate(id, resto)

    return res.status(200).json({msg: 'Character deleted'})

}

export const deleteCharacter = async (req,res) => {

    const {id} = req.params

    //delete logico
    const deleteCharacter = await Models.findByIdAndUpdate(id, {estado: false})

    if(!deleteCharacter) return res.status(404).json({msg: 'Character not found'})

    return res.status(200).json({ deleteCharacter })

    
}
