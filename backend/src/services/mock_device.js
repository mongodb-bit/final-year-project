export default function mockDevice(io) {

  const devices = [
    "esp32-01",
    "esp32-02",
    "esp32-03",
    "esp32-04",
    "esp32-05"
  ];

  setInterval(() => {

    devices.forEach((deviceId) => {

      // 🔹 Base values
      let heartRate = Math.floor(70 + Math.random() * 30); // 70–100
      let spo2 = Math.floor(95 + Math.random() * 4);       // 95–99

      // 🔥 Simulate different conditions
      if (deviceId === "esp32-02") {
        // Critical patient
        heartRate = Math.floor(110 + Math.random() * 20); // 110–130
        spo2 = Math.floor(85 + Math.random() * 5);        // 85–90
      }

      if (deviceId === "esp32-03") {
        // Medium condition
        heartRate = Math.floor(90 + Math.random() * 10);  // 90–100
        spo2 = Math.floor(92 + Math.random() * 3);        // 92–95
      }

      const data = {
        deviceId,
        heartRate,
        spo2,
      };

      console.log("Mock Sent:", data);

      // ✅ Send to frontend
      io.emit("vitalData", data);
    });

  }, 2000);
}