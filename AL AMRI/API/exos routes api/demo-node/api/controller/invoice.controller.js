const invoiceService = require("../service/invoice.service");

const fetchAll = async (req, res) => {
    try{
        const invoices = await invoiceService.findAll();

        res.status(200).json(invoices)
    }
    catch(error){
        res.status(500).json(error)
    }
}

const fetchById = async (req, res) => {
    try{
        const {id} = req.params
        const invoice = await invoiceService.findById(id);

        res.status(200).json(invoice)
    }
    catch(error){

        res.status(500).json(error)
    }
}

const createInvoice = async (req, res) => {
    try{
        const invoice = req.body;
        await invoiceService.save({...invoice, paid: false});
        res.status(201).json({message: "Facture ajoutée avec succès"})
    }
    catch(error){
        res.status(500).json(error)
    }
}

const editInvoice = async (req, res) => {
    try{
        const {id} = req.params;
        const invoice = req.body;
        await invoiceService.update(id, invoice);

        res.status(200).json({message: "Facture modifiée avec succès"})
    }
    catch(error){
        res.status(500).json(error)
    }
}

const removeInvoice = async (req, res) => {
    try{
        const {id} = req.params

        await invoiceService.remove(id);
        res.status(200).json({message: "Facture supprimée avec succès"})
    }
    catch(error){
        res.status(400).json(error)
    }
}

module.exports = {fetchAll, fetchById, createInvoice, editInvoice, removeInvoice}