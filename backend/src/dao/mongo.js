const Personagem = require("../model/mongo/personagens.mongo");
const Feitico = require("../model/mongo/feiticos.mongo");
const PersonagemFeitico = require("../model/mongo/personagemFeitico.mongo");

// Desafio: implementar os métodos abaixo
// Devem ter o mesmo comportamento que as funçoes do mysql

const feiticos = {
  // retorna todos os feiticos da collection de feiticos
  getAll: "desafio",

  // retorna todos os feiticos de um personagem
  // que estáo armazenados na tabela personagem_feitico
  getByPersonsagemId: "desafio",

  // cria um novo feitico por usuario
  // na tabela personagem_feitico
  create: "desafio",

  // retorna um feitico pelo id
  getById: "desafio",
};
const personagens = {
  // retorna todos os personagens da collection de personagens
  // com os nomes das casas
  getAll: "desafio",
  // retorna um personagem pelo id
  remove: "desafio",
  // cria um novo personagem
  create: "desafio",
  // retorna um personagem pelo id
  getById: "desafio",
};

module.exports = { feiticos, personagens };
