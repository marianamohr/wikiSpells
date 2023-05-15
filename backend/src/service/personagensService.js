const personagensModel = require("../model/personagensModel");

const getAll = async () => {
  const products = await personagensModel.getAll();
  return products;
};

const getById = async (id) => {
  console.log(id);
  const personagem = await personagensModel.getById(id);
  return personagem;
};
const remove = async (id) => {
  console.log(id);
  const personagem = await personagensModel.remove(id);
  return personagem;
};

const create = async (personagem) => {
  const personagemCreated = await personagensModel.create(personagem);
  return personagemCreated;
};

module.exports = { getAll, getById, create, remove };
