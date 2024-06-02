const mongoose = require("mongoose");

const feiticoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
});

const Feitico = mongoose.model("Feitico", feiticoSchema);

module.exports = Feitico;
