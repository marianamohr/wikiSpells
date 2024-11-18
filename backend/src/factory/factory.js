const config = require("../config/config");

const daoMongo = require("../dao/mongo");
const daoMysql = require("../dao/mysql");

// console.log(`Using ${config.persistence}`);

let dao;

switch (config.persistence) {
  case "mongo":
    dao = daoMongo;
    break;

  case "mysql":
    dao = daoMysql;
    break;
}
// console.log(dao);

module.exports = dao;
