const Personagem = require("../model/mongo/personagens.mongo");
const Feitico = require("../model/mongo/feiticos.mongo");
const PersonagemFeitico = require("../model/mongo/personagemFeitico.mongo");
const personagemDTO = require("../dto/personagem.dto");

// Desafio: implementar os métodos abaixo
// Devem ter o mesmo comportamento que as funçoes do mysql

const feiticos = {
  // retorna todos os feiticos da collection de feiticos
  getAll: async () => {
    /* const users = [
      {
        id: 10,
        name: "Harry Potter",
        house: "Gryffindor",
      },
      {
        id: 20,
        name: "Draco Malfoy",
        house: "Slytherin",
      },
    ];*/
    const users = await Personagem.find();

    const userDto = users.map((u) => {
      return personagemDTO(u);
    });
    return userDto;
  },

  // retorna todos os feiticos de um personagem
  // que estáo armazenados na tabela personagem_feitico
  getByPersonsagemId: async (id) => {
    /*const user = [
      {
        id: 10,
        name: "Harry Potter",
        house: "Gryffindor",
      },
    ];*/
    const user = await Personagem.find({ _id: id });
    return user;
  },

  // cria um novo feitico por usuario
  // na tabela personagem_feitico
  create: (id, novoFeitico) => {
    // como vai ser feito
  },

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
