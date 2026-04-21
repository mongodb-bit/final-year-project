import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-slate-800 text-white h-screen p-4 transition-all duration-300 ${
        open ? "w-64" : "w-16"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="bg-slate-600 px-2 py-1 rounded-md mb-4"
      >
        ☰
      </button>

      {open && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Group Chat</h3>
          <div className="bg-slate-700 p-3 rounded-lg">
            Emergency team communication
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
