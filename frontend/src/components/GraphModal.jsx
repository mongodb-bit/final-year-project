import { useEffect, useState } from "react";
import HeartRateChart from "./graphComponents/HeartRateChart";
import Spo2Chart from "./graphComponents/Spo2Chart";

const generateInitialData = (status) => {
  const data = [];

  for (let i = 0; i < 60; i++) {
    let heartBase = 75;
    let spo2Base = 97;

    if (status === "red") {
      heartBase = 110;
      spo2Base = 90;
    } else if (status === "yellow") {
      heartBase = 95;
      spo2Base = 94;
    }

    data.push({
      time: i,
      heartRate: heartBase + Math.floor(Math.random() * 10),
      spo2: spo2Base + Math.floor(Math.random() * 3),
    });
  }

  return data;
};

const GraphModal = ({ patient, onClose }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (patient) {
      setData(generateInitialData(patient.status));
    }
  }, [patient]);

  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[1000px] shadow-xl">
        <h2 className="text-2xl font-bold mb-6">
          {patient.device} - Last 1 Minute Vitals
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
