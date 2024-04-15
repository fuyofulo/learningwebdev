const jwt = require("jsonwebtoken");

const value = {
    name: "Zaid",
    accountNo: 123123123
}

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWmFpZCIsImFjY291bnRObyI6MTIzMTIzMTIzLCJpYXQiOjE3MDczMDIwMDV9.gIWj-WzzvQNp1fGBfhe3Wx93ukDaexpzL4AmiS0AyZk"
, "secret");

console.log(token)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWmFpZCIsImFjY291bnRObyI6MTIzMTIzMTIzLCJpYXQiOjE3MDczMDIyNDB9.QhbxtmAIcJiQMtjPGC5m1ptkBm53z3rQKz_tk74PNmw