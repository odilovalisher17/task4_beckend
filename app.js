const express = require("express");
const userRouter = require("./controllers/userController");

const app = express();

// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://intern-itransition-task4.netlify.app/"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/users", userRouter);

module.exports = app;
