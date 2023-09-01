//const {mongoose} = require("mongoose");

const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/common.Schema");

const SubtaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed"],
    default: "pending",
  },
  ...commonSchema,
  //created_at: {type : Date, default: Date.now() }
});

module.exports = model("Subtask", SubtaskSchema);
