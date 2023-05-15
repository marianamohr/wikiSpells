const feiticosModel = require("../model/feiticosModel");

const getAll = async () => {
  const list = await feiticosModel.getAll();
  return list;
};
const getByPersonsagemId = async (id) => {
  const list = await feiticosModel.getByPersonsagemId(Number(id));
  return list;
};
const create = async (id, novoFeitico) => {
  const personagemCreated = await feiticosModel.create(id, novoFeitico);
  return personagemCreated;
};

module.exports = { getByPersonsagemId, getAll, create };
