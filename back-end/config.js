require("dotenv").config();
const mysql = require("mysql2");

const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD } = process.env;
const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASSWORD,
});

module.export = {
  db,
};
