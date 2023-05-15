const personagensService = require("../service/personagensService");

const getAll = async (_req, res) => {
  try {
    const personagens = await personagensService.getAll();
    return res.status(200).json(personagens);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const personagem = await personagensService.getById(id);
    return res.status(200).json(personagem);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const create = async (req, res) => {
  try {
    const personagem = req.body;
    console.log(personagem);
    const personagemCreated = await personagensService.create(personagem);
    return res.status(200).json(personagemCreated);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await personagensService.remove(id);
    return res.status(204).json();
  } catch (e) {
    return res.status(500).send(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
};
