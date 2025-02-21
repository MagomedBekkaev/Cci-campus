const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Invoice = sequelize.define("Invoice",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paid:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    tableName: "invoices"
})

module.exports = Invoice;