const router = require("express").Router();
const subRouter = require("../Modules/subtasks/subtask.api");
const todoRouter = require("../Modules/todod/todo.api");

router.use("/subta", subRouter);
router.use("/todo", todoRouter);

modules.exports = router;
