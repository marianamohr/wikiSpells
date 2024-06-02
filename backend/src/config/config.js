require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  passwdGmail: process.env.PASSWD,
  mail: process.env.MAIL,
  persistence: process.env.PERSISTENCE,
};
