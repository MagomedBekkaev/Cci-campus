const express = require("express")
const postRouter = require("./routers/posts.router")

const app = express()

app.use(express.json())
app.use("/api/posts", postRouter)

app.listen(4000, () => console.log("SERVER EXPRESS START"))


// GET, POST, PUT, PATCH et DELETE

// app.get("/produits", (request, response) => {
//     response.send("résponse GET")
// })

// app.get("/produits/:id", (request, response) => {
//     console.log(request.params);
//     response.send("résponse GET")
// })

// app.post("/produits", (request, response) => {
//     console.log(request.body);
//     response.send("résponse POST")
// })

// app.get("/users/:id", (request, response) => {
//     response.send(request.params)
// })

// app.post("/users", (request, response) => {
//     response.send(request.body);
// })

// const users = [
//     {
//         id: 1,
//         name: "Magomed"
//     }, {
//         id: 2,
//         name: "Bob"
//     }
// ]

// app.get("/products/:id", (request, response) => {
//     const id = request.params.id;

//     const user = tabUsers.find((utilisateur) => utilisateur.id == id)

//     console.log(user);

//     if(!user) {
//         response.status(404).json({message: "User not found"})
//     } 

//     response.status(200).json(user)
// })

