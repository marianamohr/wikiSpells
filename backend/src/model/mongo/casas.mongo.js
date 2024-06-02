const mongoose = require("mongoose");

const casaSchema = new mongoose.Schema({
  casa: { type: String, required: true },
  fundador: { type: String, required: true },
});

const Casa = mongoose.model("Casa", casaSchema);

module.exports = Casa;
