const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("invoices", "sofiane", "password", {
    host: "localhost",
    port: 5433,
    dialect: "postgres"
});

sequelize.authenticate()
.then(() => console.log("Connexion OK"))
.catch(err => console.log(err)) 

sequelize.sync({force: false})
.then(() => console.log("Synchronisation OK"))
.catch(err => console.log(err))

module.exports = sequelize