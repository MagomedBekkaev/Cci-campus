const User = require("../models/user.model");

const createUser = async (userData) => {
    return await User.create(userData);
};

const updateUser = async (email, newValues) => {
    return await User.update(newValues, { where: { email } });
};

const deleteUser = async (email) => {
    return await User.destroy({ where: { email } });
};

const getAllUsers = async () => {
    return await User.findAll()
};

const findUserById = async (id) => {
    const user = await User.findByPk(id)

    return user;
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    findUserById
};