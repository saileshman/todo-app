const { model, Model } = require("mongoose");
const Modle = require("./subtask.modle");

const create = async (payload) => {
  return await model.create(payload);
};

const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

const list = async () => {
  return await Model.find();
};

const updateById = async (payload, id) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const deleteById = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, getById, list, updateById, deleteById };
