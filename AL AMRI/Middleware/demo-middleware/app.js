import "./models/index.js";
import express from "express";
import userRouter from "./routes/user.router.js";
import postRouter from "./routes/post.router.js";
import middlewares from "./middlewares/index.js";

const app = express();

app.use(express.json());

app.use(middlewares.reqLogsMiddleware);
app.use(middlewares.validationFileds);

app.post(
    "/users",
    validationFileds(["username", "email", "password"]),
    (req, res) => { 
        res.status(201).json({ message: "User created" });
     }
);

app.get("/demo",(_, response) => {
    response.status(200).json({message: "hello"})
})

app.use("/users",userRouter)
app.use("/posts",postRouter)

app.listen(3001, () => console.log("server start"))