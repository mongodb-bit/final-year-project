import { useEffect, useState } from "react";
import { socket } from "../socket";   // ✅ USE GLOBAL SOCKET
import HeartRateChart from "./graphComponents/HeartRateChart";
import Spo2Chart from "./graphComponents/Spo2Chart";

const GraphModal = ({ patient, onClose }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!patient) return;

    const handleVitalData = (msg) => {
      if (msg.deviceId === patient.device) {
        setData((prev) => [
          ...prev.slice(-50), 
          {
            time: Date.now(),  
            heartRate: msg.heartRate,
            spo2: msg.spo2,
          },
        ]);
      }
    };

    // ✅ attach listener
    socket.on("vitalData", handleVitalData);

    // ✅ cleanup ONLY listener
    return () => {
      socket.off("vitalData", handleVitalData);
    };
  }, [patient]);

  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[1000px] shadow-xl">
        <h2 className="text-2xl font-bold mb-6">
          {patient.device} - Live Vitals
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <HeartRateChart data={data} status={patient.status} />
          <Spo2Chart data={data} />
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GraphModal;