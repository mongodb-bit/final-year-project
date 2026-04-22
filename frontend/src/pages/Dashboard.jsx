import { useState, useEffect } from "react";
import Header from "../components/Header";
import PatientList from "../components/PatientList";
import Sidebar from "../components/Sidebar";
import GraphModal from "../components/GraphModal";
import { socket } from "../socket";   // ✅ global socket

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const handleVitalData = (msg) => {
      console.log("🔥 Received:", msg);

      setPatients((prev) => {
        const exists = prev.find(p => p.device === msg.deviceId);

        let status = "green";
        if (msg.heartRate > 100 || msg.spo2 < 92) status = "red";
        else if (msg.heartRate > 90 || msg.spo2 < 95) status = "yellow";

        if (exists) {
          return prev.map(p =>
            p.device === msg.deviceId
              ? {
                  ...p,
                  heartRate: msg.heartRate,
                  spo2: msg.spo2,
                  status
                }
              : p
          );
        } else {
          return [
            ...prev,
            {
              id: Date.now(),
              device: msg.deviceId,
              heartRate: msg.heartRate,
              spo2: msg.spo2,
              status
            }
          ];
        }
      });
    };

    // ✅ attach listener ONCE
    socket.on("vitalData", handleVitalData);

    // ✅ cleanup ONLY removes listener (NOT socket)
    return () => {
      socket.off("vitalData", handleVitalData);
    };
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <Header doctorName="Subin" patients={patients} />

        <PatientList
          patients={patients}
          onViewGraph={setSelectedPatient}
        />

        <GraphModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      </div>
    </div>
  );
};

export default Dashboard;