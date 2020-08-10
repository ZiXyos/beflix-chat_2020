const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config;
const passport = require("passport");

const users = require("./Models/Users");
const chatRoom = require("./Models/ChatRoom");
const messages = require("./Models/messages");

const errorHandlers = require("./Errors/errorHanlder");
const db = require("./Config/keys").mongoURI;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);

if (process.env.ENV === "DEVELOPMENT") {

    app.use(errorHandlers.developmentErrors);
}
else app.use(errorHandlers.productionErrors);

// Connect to MongoDB
mongoose.connect( db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB successfully connected 🧉"))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use(passport.initialize());

require("./Config/passport")(passport);

app.use("/user", require("./Routes/Api/users"));
app.use('/chatRoom', require("./Routes/Api/chatroom"));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} 🔥!`));
