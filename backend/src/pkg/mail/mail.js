const nodemailer = require("nodemailer");
const config = require("../../config/config");

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "marianamohr@gmail.com",
    pass: config.passwdGmail,
  },
});

const emailNovoFeitico = async (aluno, feitico) => {
  return await transport.sendMail({
    from: "Controle de execuções feitiços <controledenovosfeiticos@gmail.com>",
    to: config.mail,
    subject: `Novo feitiço executado! Aluno: ${aluno}`,
    html:
      `<h2>Comunicação de execução de feitiços</h2>` +
      `<p>Detectamos que o aluno ${aluno}</p>` +
      `<p>Conjurou o feitiço: ${feitico} no dia de hoje</p>` +
      `<p>Atenciosamente, </p>` +
      `<p>Controle de execuções de feitiços</p>`,
    attachments: [],
  });
};

module.exports = { emailNovoFeitico };
