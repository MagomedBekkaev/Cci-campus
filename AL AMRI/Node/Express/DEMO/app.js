const express = require("express");
const postRouter = require("./routers/posts.router");

const app = express();

app.use(express.json())

app.use("/api/posts", postRouter)

app.listen(4000, () => console.log("SERVER EXPRESS START"))