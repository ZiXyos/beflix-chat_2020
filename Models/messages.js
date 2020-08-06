const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({

    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required",
        ref: "Chatroom"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required!",
        ref: "User"
    },
    message: {
        type: String,
        required: "Message is required!",
    },
});

module.exports = Message = mongoose.model("Message", messageSchema);