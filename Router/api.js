const router = require("express").Router();
const subRouter = require("../Modules/subtasks/subtask.api");
const todoRouter = require("../Modules/todos/todo.api");

router.use("/subtasks", subRouter);
router.use("/todos", todoRouter);

module.exports = router;
