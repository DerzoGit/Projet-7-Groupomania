const mysql = require("mysql2");
const Sequelize = require("sequelize");

const db = new Sequelize('groupomania', 'root', 'RtPassword', {
    host: "localhost",
    port: 3306,
    pool: {
        max:5,
        min:0,
        idle: 10000
    },
    dialect: "mysql"
});

module.exports = db;