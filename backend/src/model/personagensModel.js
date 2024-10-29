const connection = require("../../database/connection");

const getAll = async () => {
  const [personagens] = await connection.execute(
    `SELECT p.id as id, p.nome as nome, c.casa as casa
     FROM wikiSpells.personagens as p
     INNER JOIN wikiSpells.casas as c
     ON p.casa_id = c.id;`
  );
  return personagens;
};

const getById = async (id) => {
  const [personagem] = await connection.execute(
    `SELECT p.id as id, p.nome as nome, c.casa as casa
     FROM wikiSpells.personagens as p
     INNER JOIN wikiSpells.casas as c
     ON p.casa_id = c.id
     WHERE p.id = ?;`,
    [id]
  );
  return personagem;
};
const create = async ({ nome, casa_id }) => {
  const [{ insertId }] = await connection.execute(
    "INSERT INTO wikiSpells.personagens (nome, casa_id) " + " VALUES (?, ?);",
    [nome, casa_id]
  );
  const [[response]] = await connection.execute(
    "SELECT * FROM wikiSpells.casas WHERE id = ?",
    [casa_id]
  );
  return { id: insertId, nome, casa: response.casa };
};

const remove = async (id) => {
  await connection.execute(
    `DELETE FROM wikiSpells.personagem_feiticos WHERE personagem_id = ?;`,

    [id]
  );

  await connection.execute(`DELETE FROM wikiSpells.personagens WHERE id = ?;`, [
    id,
  ]);
};
module.exports = { getAll, getById, create, remove };
