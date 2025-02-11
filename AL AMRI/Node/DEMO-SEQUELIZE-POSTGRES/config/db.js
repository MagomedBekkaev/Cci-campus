const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("demo", "postgres", "root", {
    host: "localhost",
    dialect: "postgres"
})

sequelize.authenticate() 
.then(() => { 
console.log("Connexion réussie à la base de données") 
}) 
.catch(err => { 
    console.error("Impossible de se connecter à la base de données :", err) 
}) 

sequelize.sync({force: false, alter: true}) 
.then(() => { 
    console.log('Les modèles ont été synchronisés avec la base de données.'); 
}) 
.catch(err => { 
    console.error('Erreur lors de la synchronisation des modèles :', err); 
}); 

module.exports = sequelize





