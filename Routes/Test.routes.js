
const TestRouter = require("express").Router();

TestRouter.get("/", (req, res) => res.send({ message: "Welcome to Test Route" }));



module.exports = TestRouter;