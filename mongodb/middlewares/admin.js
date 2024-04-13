
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    const response = await Admin.findOne({
        username: username,
        password: password
    }) 
    if(response) {
        next();
    } else {
        res.status(404).status("This admin does not exists");
    }
}

module.exports = adminMiddleware;
