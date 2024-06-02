// const personagensModel = require("../model/personagensModel");
const factory = require("../factory/factory");
const getAll = async () => {
  const products = await factory.personagens.getAll();
  return products;
};

const getById = async (id) => {
  console.log(id);
  const personagem = await factory.personagens.getById(id);
  return personagem;
};
const remove = async (id) => {
  console.log(id);
  const personagem = await factory.personagens.remove(id);
  return personagem;
};

const create = async (personagem) => {
  const personagemCreated = await factory.personagens.create(personagem);
  return personagemCreated;
};

module.exports = { getAll, getById, create, remove };
