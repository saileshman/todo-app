const router = require("express").Router();
const TodoController = require("./todo.controller");

router.post("/", async (req, res, next) => {
  try {
    const { payload } = req.body;
    const result = await TodoController.create(payload);
    result.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await TodoController.list();
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.getByID(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { payload } = req.body;
    const result = await TodoController.updateById(payload);
  } catch (e) {
    next(e);
  }
}); // to update

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.deleteById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
