const TodoModle = require("./todo.model");

const create = async (payload) => {
  return await TodoModle.create(payload);
};

const list = async () => {
  return await TodoModle.find();
};

const getByID = async (id) => {
  return await TodoModle.findOne({ _id: id });
};
const updateById = async (id, payload) => {
  return await TodoModle.findOneAndUpdate({ _id: id }), payload, { new: true };
};
const deleteById = async (id) => {
  return await TodoModle.deleteOne({ _id: id });
};

module.exports = { create, list, getByID, updateById, deleteById };

// create there is (getbyid and )
