const express = require("express");
require("./models")
const invoiceRoutes = require("./routes/invoice.router");
const clientRoutes = require("./routes/clientRoutes");

const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(express.json())

app.use("/api/invoices", invoiceRoutes);
app.use("/api/clients", clientRoutes);

module.exports = app;