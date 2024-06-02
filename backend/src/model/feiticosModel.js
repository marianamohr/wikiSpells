const connection = require("../../database/connection");

const getAll = async (id) => {
  const [feiticos] = await connection.execute(
    `SELECT * FROM wikiSpells.feiticos;`
  );
  return feiticos;
};
const getByPersonsagemId = async (id) => {
  const [personagem] = await connection.execute(
    `SELECT  p.nome as nome, f.nome as feitico, pf.data_execucao as data
    FROM wikiSpells.personagem_feiticos as pf
    INNER JOIN wikiSpells.personagens as p
    ON p.id = pf.personagem_id
    INNER JOIN wikiSpells.feiticos as f
    ON f.id = pf.feitico_id
    WHERE pf.personagem_id = ?;`,
    [id]
  );
  return personagem;
};
const create = async (id, novoFeitico) => {
  const [personagemCreated] = await connection.execute(
    `INSERT INTO wikiSpells.personagem_feiticos (personagem_id, feitico_id, data_execucao) VALUES (?, ?, NOW());`,
    [id, novoFeitico]
  );
  return personagemCreated;
};

const getById = async (id) => {
  const [feitico] = await connection.execute(
    `SELECT * FROM wikiSpells.feiticos WHERE id = ?;`,
    [id]
  );
  return feitico;
};

module.exports = { getByPersonsagemId, getAll, create, getById };
