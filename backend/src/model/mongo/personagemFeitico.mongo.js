const mongoose = require("mongoose");

const personagemFeiticoSchema = new mongoose.Schema({
  personagem_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Personagem",
    required: true,
  },
  feitico_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Feitico",
    required: true,
  },
  data_execucao: { type: Date, required: true },
});

const PersonagemFeitico = mongoose.model(
  "PersonagemFeitico",
  personagemFeiticoSchema
);

module.exports = PersonagemFeitico;
