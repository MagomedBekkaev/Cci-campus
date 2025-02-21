const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const Post = sequelize.define("Post", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(),
        allowNull: true,
    }
}, {
    tableName: "posts"
})

module.exports = Post;