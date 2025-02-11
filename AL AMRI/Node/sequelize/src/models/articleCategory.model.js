const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ArticleCategory = sequelize.define("ArticleCategory", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    // articleId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // categoryId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
},{
    tableName: "article_categories"
})

module.exports = ArticleCategory;