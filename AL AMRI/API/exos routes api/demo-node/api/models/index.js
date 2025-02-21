const Client = require("./client.model")
const Invoice = require("./invoice.model")

Client.hasMany(Invoice, {as: "invoices", foreignKey: "clientId"})
Invoice.belongsTo(Client, {as: "client", foreignKey: "clientId"})

module.exports = {Client, Invoice}