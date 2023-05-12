const express = require("express");
const cors = require("cors");
const connection = require("../database/connection");
const personagensController = require("./controller/personagensController");
const feiticosController = require("./controller//feiticosController");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", async (_req, res) => {
  try {
    return res.status(200).json({ mesage: "API no Ar" });
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.get("/personagens", personagensController.getAll);
app.get("/personagens/:id", personagensController.getById);
app.post("/personagens", personagensController.create);
app.get("/feiticos/:personagem_id", feiticosController.getByPersonsagemId);

module.exports = app;
