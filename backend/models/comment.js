const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const Comment = sequelize.define('comments', {
    id: { type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true },
    user_id: { type:DataTypes.INTEGER, allowNull:false },
    post_id: { type:DataTypes.INTEGER, allowNull:false },
    content: { type:DataTypes.TEXT, allowNull:false },
    media: { type:DataTypes.STRING(255), allowNull:true },
    dateAdd: { type:DataTypes.DATE, allowNull:false }
}, {
    tableName: 'comment', timestamp: false
});

module.exports = Comment;