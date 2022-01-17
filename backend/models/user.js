const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('users', {
    id: { type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true },
    name: { type:DataTypes.STRING, allowNull:false },
    firstname: { type:DataTypes.STRING, allowNull:false },
    email: { type:DataTypes.STRING, allowNull:false, unique:true },
    password: { type:DataTypes.STRING, allowNull:false },
    isAdmin: { type:DataTypes.BOOLEAN }
}, {
    tableName: 'user', timestamp:false
});

module.exports = User;