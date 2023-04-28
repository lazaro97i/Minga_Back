import express from "express"
import controller from "../controllers/mangas_controller.js"
import schema from "../schemas/mangas_schema.js"
import validator from "../middlewares/validator.js"
import mangaExist from "../middlewares/mangaExist.js"

const { 
    create, 
    read 
} = controller

let router = express.Router()

router.post('/', mangaExist, validator(schema), create)
router.get('/', read)

export default router