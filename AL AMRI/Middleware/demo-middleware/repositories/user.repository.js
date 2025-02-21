const User = require("../models/User")

const findUserById = async (id) => {
    const user = await User.findByPk(id)

    return user;
}

const findUsers = async (id) => {
    const users = await User.findAll()

    return users;
}

module.exports = {findUserById, findUsers}