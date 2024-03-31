const jwt = require("jsonwebtoken");

const value = {
    name: "Zaid",
    accountNo: 123123123
}

const token = jwt.sign(value, "secret");
console.log(token)
 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWmFpZCIsImFjY291bnRObyI6MTIzMTIzMTIzLCJpYXQiOjE3MDczMDIwMDV9.gIWj-WzzvQNp1fGBfhe3Wx93ukDaexpzL4AmiS0AyZk