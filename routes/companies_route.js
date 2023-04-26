import express from "express"
import controller from "../controllers/companies_controller.js"
import schema from "../schemas/companies_schema.js"
import validator from "../middlewares/validator.js"

const {
    read,
    create
} = controller

let router = express.Router()

router.post('/', validator(schema), create)
router.get('/', read)

export default router