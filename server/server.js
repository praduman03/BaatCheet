import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import ConnectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();

const PORT = process.env.SERVER_PORT || 8000;

app.listen(PORT, () => {
  ConnectToMongoDB();
  console.log(`server is listening on port: ${PORT}`);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
