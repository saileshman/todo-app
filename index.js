require("dotenv").config();
const express = require("express");
const indexRoute = require("./Router/index"); // go to router index.js

const app = express();

const port = +process.env.PORT || 3000;
const { mongoose } = require("mongoose");

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("database is connected");
});

app.use("/", indexRoute);

app.use((req, res, next) => {
  err = err ? err.toString() : "something is wrong";
  res.status(500).json({ data: "", msg: err });
});

app.listen(() => {
  console.log(`application is running on port ${port}`);
});
