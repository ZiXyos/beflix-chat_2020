const mongoose = require("mongoose");
const Chatroom = mongoose.model("chatroom");

exports.createChatroom = async (req, res ) => {

    const { name } = req.body;
    const regEx = "/^[A-Za-z\s]+$/";

    if (regEx.test(name)) throw "Pls Give Only Available character [ A-Za-z ]";

    const chatRoomExist = await Chatroom.findOne( { name } );

    if(chatRoomExist) throw "pls use anoder name the chat room name alerady exist"

    const chatroom = new Chatroom({ name });

    await chatroom.save();

    res.json({

        message: "Chatroom " + name + " Created 🤴🏾"
    })
}