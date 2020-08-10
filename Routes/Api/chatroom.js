const express = require("express");
const router = express.Router();

const { catchErrors } = require("../../Errors/errorHanlder");
const chatRoomController = require("../../Controllers/chatroomController.js");
const auth = require("../../Middlewares/Auth");

router.post("/", auth, catchErrors(chatRoomController.createChatroom));

module.exports = router;