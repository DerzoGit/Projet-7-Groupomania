const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const user = db.define('users', {
    id: { type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true },
    name: { type:DataTypes.STRING(255), allowNull:false },
    firstname: { type:DataTypes.STRING(255), allowNull:false },
    email: { type:DataTypes.STRING(255), allowNull:false, unique:true },
    password: { type:DataTypes.STRING(255), allowNull:false },
    isAdmin: { type:DataTypes.BOOLEAN, allowNull:false }
}, {
    tableName: 'user', timestamp:false
});

module.exports = user;