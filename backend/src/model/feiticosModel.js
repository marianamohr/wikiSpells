const connection = require("../../database/connection");

const getByPersonsagemId = async (id) => {
  console.log(id);
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

module.exports = { getByPersonsagemId };
