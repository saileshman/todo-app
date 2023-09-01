//const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/common.Schema");

const TodoSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  ...commonSchema,
  //created_at: { type: Date, default: Date.now() },
});

const TodoModle = model("Todo", TodoSchema);

//module.exports = module("Todo", TodoSchema);
module.exports = TodoModle;
