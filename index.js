require("dotenv").config();
const express = require("express");
const { mongoose } = require("mongoose");
const indexRoute = require("./Router/index"); // go to router index.js

const app = express();

const port = +process.env.PORT || 3000;
const DB_URL = +process.env.DB_URL || "mongodb://127.0.0.1:27017//test";
//DB_URL = process.env.DB_URL || "mongodb"://127.0.0.1:27017//todo_app;

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("database is connected");
});

app.use("/", indexRoute);
app.use(express.json());

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something is wrong";
  res.status(500).json({ data: "", msg: err });
});

app.listen(() => {
  console.log(`application is running on port ${port}`);
});
