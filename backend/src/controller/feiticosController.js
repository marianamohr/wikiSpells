const feiticosService = require("../service/feiticosService");

const getAll = async (req, res) => {
  try {
    const feiticos = await feiticosService.getAll();
    return res.status(200).json(feiticos);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const getByPersonsagemId = async (req, res) => {
  try {
    const { personagem_id } = req.params;
    const list = await feiticosService.getByPersonsagemId(personagem_id);
    return res.status(200).json(list);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const create = async (req, res) => {
  try {
    const { id, novoFeitico } = req.body;
    console.log("id", id, "novoFeitico", novoFeitico);
    const personagemCreated = await feiticosService.create(id, novoFeitico);
    return res.status(200).json(personagemCreated);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};

module.exports = {
  getAll,
  getByPersonsagemId,
  create,
};
