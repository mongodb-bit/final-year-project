import express from "express";
import http from "http";
import { Server } from "socket.io";
import mqttService from "./services/mqtt_service.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());

// Start MQTT service
mqttService(io);

// Start server
server.listen(5000, () => {
  console.log("Server running on port 5000");
});