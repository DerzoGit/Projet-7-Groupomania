const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const Post = db.define('posts', {
    id: { type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true },
    user_id: { type:DataTypes.INTEGER, allowNull:false },
    title: { type:DataTypes.STRING(255), allowNull:true },
    content: { type:DataTypes.TEXT, allowNull:false },
    media: { type:DataTypes.STRING(255), allowNull:true },
    dateAdd: { type:DataTypes.DATE, allowNull:false }
}, {
    tableName: 'post', timestamp: false
});

module.exports = Post;