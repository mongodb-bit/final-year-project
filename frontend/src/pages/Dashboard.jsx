import { useState } from "react";
import Header from "../components/Header";
import PatientList from "../components/PatientList";
import Sidebar from "../components/Sidebar";
import GraphModal from "../components/GraphModal";
import { patientsData } from "../data/patients";

const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Header doctorName="Subin" patients={patientsData} />

        <PatientList
          patients={patientsData}
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
