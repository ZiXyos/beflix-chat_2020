const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatRoomSchema = new Schema({

    name: {
        type: String,
        required: true
    }
});

module.exports = ChatRoom = mongoose.model("Chatroom", ChatRoomSchema);