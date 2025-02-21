require('dotenv').config()
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: "localhost",
    port: 5435,
    dialect: "postgres"
});

sequelize.authenticate()
.then(() => console.log("Connexion OK"))
.catch(err => console.log(err)) 

sequelize.sync({force: false})
.then(() => console.log("Synchronisation OK"))
.catch(err => console.log(err))

module.exports = sequelize