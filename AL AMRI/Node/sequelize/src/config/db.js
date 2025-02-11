const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('tp18', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
.then(() => {
    console.log('Connection réussie à la base de données.');
})
.catch((err) => {
    console.error('Impossible de se connecter à la base de données:', err);
});

sequelize.sync({force: false})
.then(() => {
console.log('Les modèles ont été synchronisés avec la base de données.');
})
.catch(err => {
console.error('Erreur lors de la synchronisation des modèles :', err);
});

module.exports = sequelize;