const express = require("express");

const app = express();

const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
const io = require("socket.io")(server);
let totalConnections = 0;


io.on("connect", (socket) => {
    console.log(socket.id);
    totalConnections++;
    console.log(`New user connected. ${totalConnections} users connected.`);

    console.log("Nice to meet you. (shake hand)");
    socket.emit("Welcome to socket");
    
    socket.on("disconnect", () => {
      totalConnections--;
    
      console.log(`User disconnected. ${totalConnections} users connected`);
    });
});
