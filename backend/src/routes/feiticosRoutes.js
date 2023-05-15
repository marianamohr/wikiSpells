const express = require("express");
const feiticosController = require("../controller/feiticosController");

const feiticosRouter = express.Router();

feiticosRouter.get("/", feiticosController.getAll);
feiticosRouter.post("/", feiticosController.create);
feiticosRouter.get("/:personagem_id", feiticosController.getByPersonsagemId);

module.exports = feiticosRouter;
