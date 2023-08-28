const router = require("express").Router();
const apiRouter = require("./api");

router.get("api/v1", apiRouter);

module.exports = router;
