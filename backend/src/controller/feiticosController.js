const feiticosService = require("../service/feiticosService");

const getByPersonsagemId = async (req, res) => {
  try {
    const { personagem_id } = req.params;
    const personagem = await feiticosService.getByPersonsagemId(personagem_id);
    return res.status(200).json(personagem);
  } catch (e) {
    return res.status(500).send(e);
  }
};

module.exports = {
  getByPersonsagemId,
};
