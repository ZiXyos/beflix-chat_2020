const express = require("express");
const router = express.Router();

const { catchErrors } = require("../../Errors/errorHanlder");
const userController = require("../../Controllers/userController");

router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));

module.exports = router;