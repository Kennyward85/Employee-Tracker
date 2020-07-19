const util = require("utill");
const mysql = require("mysql");

const connection = mysqpl.creatConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "employees"
});

connection.conect();

connection.query = util.promisfy(connection.query);

module.exports = connection;