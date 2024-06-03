const nodemailerFunction = require("./mail");
const sendgridFunction = require("./sendgrid");

let mail;

if (config.isNodemailer) {
  mail = nodemailerFunction;
} else {
  mail = sendgridFunction;
}

module.exports = mail;
