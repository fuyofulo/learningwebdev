const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000);


mongoose.connect("mongodb+srv://fuyofulo:sEHFqEhUkloaLjsq@cluster0.qir16f2.mongodb.net/user_app?authMechanism=DEFAULT");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);


app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const user = new User({
        name: name,
        email: username,
        password: password,
    })
    user.save();
    res.json({
        msg: "User created successfully !!!"
    })
})


    
