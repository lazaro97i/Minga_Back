import express from 'express';
import users from "./users_route.js";
import categories from "./categories_route.js";
import authors from './authors_route.js';
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/categories", categories)
router.use("/users", users)
router.use("/authors", authors)

export default router;
