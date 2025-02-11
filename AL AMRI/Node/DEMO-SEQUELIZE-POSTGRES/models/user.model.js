const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate:{
           isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
},{
    tableName: "users"
})

module.exports = User;
