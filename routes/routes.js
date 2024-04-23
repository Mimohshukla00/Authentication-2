const express = require("express");
const router = express.Router();

const { createTodos } = require("../controllers/authget");

router.post("/authget", createTodos);

module.exports = router;
