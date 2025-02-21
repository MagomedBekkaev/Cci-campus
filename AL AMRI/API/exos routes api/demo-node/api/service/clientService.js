const Client = require("../models/client.model");

exports.findAll = async () => {
    return await Client.findAll();
}

exports.findByPk = async (id) => {
    return await Client.findByPk(id);
}

exports.create = async (clientData) => {
    return await Client.create(clientData);
}

exports.update = async (id, newValues) => {
    return await Client.update(newValues, { where: { id } });
}

exports.delete = async (id) => {
    return await Client.destroy({ where: { id } });
}