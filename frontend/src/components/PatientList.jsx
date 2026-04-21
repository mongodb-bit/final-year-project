import PatientCard from "./PatientCard";

const PatientList = ({ patients, onViewGraph }) => {

  const priority = {
    red: 1,
    yellow: 2,
    green: 3,
  };

  const sortedPatients = [...patients].sort(
    (a, b) => priority[a.status] - priority[b.status]
  );

  return (
    <div className="flex flex-wrap gap-6 mt-6">
      {sortedPatients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
          onViewGraph={onViewGraph}
        />
      ))}
    </div>
  );
};

export default PatientList;
