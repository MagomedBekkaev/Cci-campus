const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Client = sequelize.define("Client",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, {
    tableName: "clients"
})

module.exports = Client;