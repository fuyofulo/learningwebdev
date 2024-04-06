const express = require("express");
const app = express();
app.listen(3000);
app.use(express.json());

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username != "zaid" || password != "pass") {
        res.status(400).json({msg: "wrong inputs!"});
        return;
    }

    if(kidneyID != 1 && kidneyID != 2) {
        res.status(400).json({msg: "wrong number of kidneys!"});
        return;
    }

    res.json({msg: "Your kidney is fine!"});
})