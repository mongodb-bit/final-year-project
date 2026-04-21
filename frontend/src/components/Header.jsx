const Header = ({ doctorName, patients }) => {
  const redCount = patients.filter(p => p.status === "red").length;
  const yellowCount = patients.filter(p => p.status === "yellow").length;
  const greenCount = patients.filter(p => p.status === "green").length;

  return (
    <div className="flex justify-between items-center bg-slate-900 text-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">Dr. {doctorName}</h2>

      <div className="flex gap-6 font-semibold">
        <span className="text-red-500">Red: {redCount}</span>
        <span className="text-yellow-400">Yellow: {yellowCount}</span>
        <span className="text-green-500">Green: {greenCount}</span>
      </div>
    </div>
  );
};

export default Header;
