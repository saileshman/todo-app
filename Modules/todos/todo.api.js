const router = require("express").Router();

router.post("/", async (req, res, next) => {
  try {
    const { payload } = req.body;
    const result = await todoController.create(payload);
    result.json;
  } catch (e) {}
});

router.get("/", async (req, res, next) => {
  try {
    const result = await Todo;
  } catch (e) {}
});

router.get("/:id", (req, res, next) => {
  res;
});

router.put("/", (req, res, next) => {
  try {
  } catch (e) {}
}); // to update

router.delete("/", (req, res, next) => {
  try {
  } catch (e) {}
});

module.exports = router;
