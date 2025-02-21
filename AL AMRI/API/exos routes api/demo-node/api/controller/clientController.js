const clientService = require("../service/clientService");

exports.fetchAll = async (req, res) => {
    try {
        const clients = await clientService.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.fetchOne = async (req, res) => {
    try {
        const client = await clientService.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.status(200).json(client);
    } catch (error) {
        console.error("Error fetching client:", error);
        res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const newClient = await clientService.create(req.body);
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const [affectedRows] = await clientService.update(req.params.id, req.body);
        if (affectedRows === 0) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.status(200).json({ message: `${affectedRows} row(s) updated.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const affectedRows = await clientService.delete(req.params.id);
        if (affectedRows === 0) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.status(200).json({ message: `${affectedRows} row(s) deleted.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
