const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Comment = sequelize.define("Comment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // articleId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
},{
    tableName: "comments"
})

module.exports = Comment;