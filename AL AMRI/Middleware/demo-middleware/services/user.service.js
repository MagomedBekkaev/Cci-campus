const userRepository = require("../repositories/user.repository")

const getUserById = async (id) => {
    return await userRepository.findUserById(id)
}

const getAllUsers = async (id) => {
    return await userRepository.findUsers()
}

module.exports = {getUserById, getAllUsers}