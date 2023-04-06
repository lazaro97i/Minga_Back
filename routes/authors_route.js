import express from "express";
import controller from "../controllers/authors_controller.js";
import schema from "../schemas/authors_schema.js";
import validator from "../middlewares/validator.js";

const {
    create,
    read
} = controller

let router = express.Router()

router.post('/', validator(schema), create)
router.get('/', read)

export default router