const userRepository = require("../repositories/user.repository");

const createUser = async (userData) => {
    try {
        const newUser = await userRepository.createUser(userData);
        console.log(`Nouvel utilisateur créé : `, newUser);
        return newUser;
    } catch (error) {
        console.error('Erreur lors de l’insertion des données :', error);
        throw error;
    }
};

const updateUser = async (email, newValues) => {
    try {
        const [affectedRows] = await userRepository.updateUser(email, newValues);
        console.log(`${affectedRows} ligne(s) mise(s) à jour.`);
        return affectedRows;
    } catch (error) {
        console.error('Erreur lors de la mise à jour :', error);
        throw error;
    }
};

const deleteUser = async (email) => {
    try {
        const affectedRows = await userRepository.deleteUser(email);
        console.log(`${affectedRows} ligne(s) supprimée(s).`);
        return affectedRows;
    } catch (error) {
        console.error('Erreur lors de la suppression :', error);
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await userRepository.findUserById(id);
        return user;
    } catch (error) {
        console.error('Erreur lors de la récupération de l’utilisateur :', error);
        throw error;
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById
};