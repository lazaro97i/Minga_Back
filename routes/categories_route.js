import express from 'express';
import controller from '../controllers/categories_controller.js';
const {create, read, one, update, destroy} = controller
let router = express.Router();

/* GET users listing. */
router.post("/", create);
router.get("/", read);
router.get("/:category_id", one); // el nombre del param se define en el controlador
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
