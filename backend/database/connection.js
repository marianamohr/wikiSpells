const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "database",
  user: "root",
  password: "12345678",
  port: "3306",
});

module.exports = connection;
