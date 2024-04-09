import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://baatcheet-7t20.onrender.com/login"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.id;
  if (userId !== "undefined") {
    userSocketMap[userId] = socket.id;
  }
  //* io.emit() is used to emit events to all the connected clients.
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //* socket.on() is used to listen to the events and can be used on both client and server side.
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    //* to update the online users list after deleting the disconnected user
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
