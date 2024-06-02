const config = require("../config/config");
const daoMongo = require("../dao/mongo");

console.log(`Using ${config.persistence}`);
const daoMysql = require("../dao/mysql");
let dto;
switch (config.persistence) {
  case "mongo":
    dto = daoMongo;
    break;

  case "mysql":
    dto = daoMysql;
    break;
}
console.log(dto);

module.exports = dto;
