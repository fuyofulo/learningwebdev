const { User } = require("../db");

async function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    const response = await User.findOne({
        username: username,
        password: password
    }) 
    if(response) {
        next();
    } else {
        res.status(404).status("This user does not exists");
    }
}

module.exports = userMiddleware;