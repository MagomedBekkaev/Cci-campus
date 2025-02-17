const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.router");
const userController = require("./controllers/user.controller");
require('./models')

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.get("/users", userController.getAllUsers);

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

