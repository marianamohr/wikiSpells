const express = require("express");
const personagensController = require("../controller/personagensController");

const personagensRouter = express.Router();

personagensRouter.get("/", personagensController.getAll);
personagensRouter.get("/:id", personagensController.getById);
personagensRouter.post("/", personagensController.create);
personagensRouter.delete("/:id", personagensController.remove);

module.exports = personagensRouter;
