require("./models")
const express = require("express");
const app = express();
app.use(express.json());




app.get("/users", async (request, response) => {

    const result = await User.findAll()

    response.status(200).json(result)
})

app.post("/users", async (request, response) => {
    const data = request.body;

    const result = await User.create(data)

    response.status(200).json(result)
})

app.put("/users/:id", async (request, response) => {
    const data = request.body;
    const userId = request.params.id

    const result = await User.update(data, {
        where : { id : userId}
    })

    response.status(200).json(result)
})


app.listen("5004", () => console.log("Server start"))