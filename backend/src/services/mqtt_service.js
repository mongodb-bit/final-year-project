import mqtt from "mqtt";

export default function mqttService(io) {
  const client = mqtt.connect("mqtt://localhost:1883");

  client.on("connect", () => {
    console.log("Connected to MQTT broker");
    client.subscribe("devices/+/vitals");
  });

  client.on("message", (topic, message) => {
    try {
      const data = JSON.parse(message.toString());

      console.log("Received:", data);

      
      io.emit("vitalData", data);

    } catch (err) {
      console.error("MQTT Error:", err);
    }
  });
}