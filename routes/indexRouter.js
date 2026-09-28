const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.get);
indexRouter.get("/new", indexController.getNew);
indexRouter.post("/new", indexController.postNew);

module.exports = indexRouter;
