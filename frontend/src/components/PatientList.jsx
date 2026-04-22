import PatientCard from "./PatientCard";

const PatientList = ({ patients, onViewGraph }) => {

  const priority = {
    red: 1,
    yellow: 2,
    green: 3,
  };

  const sortedPatients = [...patients].sort(
    (a, b) => (priority[a.status] || 4) - (priority[b.status] || 4)
  );

  return (
    <div className="flex flex-wrap gap-6 mt-6">
      {sortedPatients.map((patient) => (
        <PatientCard
          key={patient.device}   // ✅ FIXED
          patient={patient}
          onViewGraph={onViewGraph}
        />
      ))}
    </div>
  );
};

export default PatientList;