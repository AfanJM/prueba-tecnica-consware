import { Router } from "express";
import {create, getAll, getById, deleteCharacter, updateCharacter} from '../controller/characters-controller.js'
import {check} from 'express-validator'
import {validations} from '../../validations/character-validatios.js'

const router = Router()


router.get('/characters', getAll)

router.get('/character/:id', getById)

router.post('/create', [

    check('nombre').notEmpty().withMessage('Nombre is required'),
    check('origen').notEmpty().withMessage('Origen is required'),
    check('edad').notEmpty().isNumeric('Edad is required')
], validations, create)

router.put('/character/:id', updateCharacter)


router.delete('/delete/:id', deleteCharacter )




export default router