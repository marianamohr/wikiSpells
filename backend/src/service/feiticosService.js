const feiticosModel = require("../model/feiticosModel");

const getByPersonsagemId = async (id) => {
  const personagem = await feiticosModel.getByPersonsagemId(Number(id));
  return personagem;
};

module.exports = { getByPersonsagemId };
