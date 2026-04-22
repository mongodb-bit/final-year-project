import express from "express";
import http from "http";
import { Server } from "socket.io";
import mqttService from "./services/mqtt_service.js";
import mockDevice from "./services/mock_device.js"; // ✅ ADD

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());

// ✅ Comment MQTT temporarily (since ESP not available)
// mqttService(io);

// ✅ USE MOCK INSTEAD
mockDevice(io);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});