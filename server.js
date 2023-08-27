require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./Server/api/Users/user.router");
const answerRouter=require("./Server/api/answer/answer.router");
const questionRouter=require("./Server/api/question/question.router");
const app = express();
const port = process.env.PORT||80;

app.use(express.json());
// app.use(cors());
const allowedOrigins = ["https://forumfrontend-samrawit.onrender.com"];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Expose-Headers", "Authorization"); // Expose any additional headers if needed
  next();
});
app.use(cors)
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

app.use(express.urlencoded({ extended: true }));
 
app.use("/api/users", userRouter);
app.use("/api/answer", answerRouter);
app.use("/api/question", questionRouter);


app.listen(port,"0.0.0.0", () => console.log(`listening at http://localhost:${port}`));
