const express = require("express");
const cors = require("cors");
const feiticosRouter = require("./routes/feiticosRoutes");
const personagensRouter = require("./routes/personagensRouter");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", async (_req, res) => {
  try {
    return res.status(200).json({ message: "API no Ar" });
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.use("/personagens", personagensRouter);
app.use("/feiticos", feiticosRouter);

module.exports = app;
