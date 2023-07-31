require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./Server/api/Users/user.router");
const answerRouter=require("./Server/api/answer/answer.router");
const questionRouter=require("./Server/api/question/question.router");
const app = express();
const port = process.env.PORT||80;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
 
app.use("/api/users", userRouter);
app.use("/api/answer", answerRouter);
app.use("/api/question", questionRouter);


app.listen(port,"0.0.0.0", () => console.log(`listening at http://localhost:${port}`));
