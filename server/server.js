import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import ConnectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

// const app = express();
app.use(cookieParser());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method, req.ip, req.body);
  next();
});
app.use(express.json());

const PORT = process.env.SERVER_PORT || 8000;
server.listen(PORT, () => {
  ConnectToMongoDB();
  console.log(`server is listening on port: ${PORT}`);
});

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);
