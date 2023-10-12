const express = require("express");
const userRouter = require("./controllers/userController");

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/users", userRouter);

module.exports = app;
