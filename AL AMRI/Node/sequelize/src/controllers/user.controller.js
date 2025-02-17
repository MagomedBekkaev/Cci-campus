const userService = require("../services/user.service");

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const affectedRows = await userService.updateUser(req.params.email, req.body);
        res.status(200).json({ message: `${affectedRows} ligne(s) mise(s) à jour.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const affectedRows = await userService.deleteUser(req.params.email);
        res.status(200).json({ message: `${affectedRows} ligne(s) supprimée(s).` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.fetchUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUser = async (req, res) => {


    try {
        const  userId = req.params.id
        const user = await userService.getUserById(userId)

        if ("status" in user) {
            throw user
        }

    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }

    res.status(200).json(user);
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUser
};