// const feiticosModel = require("../model/feiticosModel");

const nodemailer = require("../pkg/mail/mail");

const factory = require("../factory/factory");

const getAll = async () => {
  const list = await factory.feiticos.getAll();
  return list;
};
const getByPersonsagemId = async (id) => {
  const list = await factory.feiticos.getByPersonsagemId(Number(id));
  return list;
};
const create = async (idAluno, novoFeitico) => {
  // validar se o personagem já executou esse feitiço anteriormente
  const feiticoCreated = await factory.feiticos.create(idAluno, novoFeitico);
  const [personagem] = await factory.personagens.getById(idAluno);
  const [feitico] = await factory.feiticos.getById(novoFeitico);

  await nodemailer.emailNovoFeitico(personagem.nome, feitico.nome);

  return feiticoCreated;
};

module.exports = { getByPersonsagemId, getAll, create };
