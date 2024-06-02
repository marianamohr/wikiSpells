const mongoose = require("mongoose");

const personagemSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  casa_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Casa",
    required: true,
  },
});

const Personagem = mongoose.model("Personagem", personagemSchema);

module.exports = Personagem;
