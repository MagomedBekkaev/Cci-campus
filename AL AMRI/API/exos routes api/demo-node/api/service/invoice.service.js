const Invoice = require("../models/invoice.model")
const Client = require("../models/client.model")

const findAll = async () => {
    return await Invoice.findAll({
        include: {
            model: Client, 
            as: "client",
            attributes:  ["name", "email"]
        }
    });
}
 
const findById = async (invoiceId) => {
    return await Invoice.findByPk(invoiceId, {
        include: {
            model: Client, 
            as: "client",
            attributes:  ["name", "email"]
        }
    });
}

const save = async (invoiceData) => {
    return await Invoice.create(invoiceData);
}

const update = async (invoiceId, invoiceData) => {
    return await Invoice.update(invoiceData, {
        where: {id: invoiceId}
    });
}

const remove = async (invoiceId) => {
    return await Invoice.destroy({
        where: {id: invoiceId}
    });
}

module.exports = {findAll, findById, save, update, remove}