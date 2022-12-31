import express from 'express';
import controller from '../controllers/users_controller.js';
const {read} = controller
let router = express.Router();

/* GET users listing. */
router.get('/', read);

export default router;

