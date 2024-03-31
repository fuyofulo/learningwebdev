const express = require('express')
const app = express()
app.listen(3000)

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age
    if (age >= 14) {
        next()
    }
    else {
        res.json({
            msg: "Sorry you are not of age !!!"
        })
    }
}

app.use(isOldEnoughMiddleware)

app.get("/ride1", function(req, res) {
        res.json({
            msg: "You have successfully booked ride 1"
        })
       
})

app.get("/ride2", function(req, res) {

        res.json({
            msg: "You have successfully booked ride 2"
        })
})


