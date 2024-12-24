"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("user connected");
    socket.send("hello");
    setInterval(() => {
        socket.send("you will keep receiving this text every 5 seconds");
    }, 5000);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
