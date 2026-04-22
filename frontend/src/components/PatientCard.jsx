const statusColors = {
  red: "border-red-500 bg-red-50",
  yellow: "border-yellow-400 bg-yellow-50",
  green: "border-green-500 bg-green-50",
};

const PatientCard = ({ patient, onViewGraph }) => {
  return (
    <div
      className={`p-4 rounded-xl shadow-md border-l-8 ${statusColors[patient.status]} w-64 transition transform hover:scale-105`}
    >
      <h3 className="text-lg font-bold">{patient.device}</h3>

      <p className="mt-2 font-medium capitalize text-gray-700">
        Status: {patient.status}
      </p>

      {/* ✅ ADD THIS BLOCK */}
      <div className="mt-3 text-sm text-gray-800">
        <p>
          ❤️ Heart Rate:{" "}
          <span className="font-semibold">
            {patient.heartRate ? `${patient.heartRate} bpm` : "--"}
          </span>
        </p>

        <p>
          🫁 SpO₂:{" "}
          <span className="font-semibold">
            {patient.spo2 ? `${patient.spo2}%` : "--"}
          </span>
        </p>
      </div>

      <button
        onClick={() => onViewGraph(patient)}
        className="mt-4 w-full bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-700 transition"
      >
        View Graph
      </button>
    </div>
  );
};

export default PatientCard;