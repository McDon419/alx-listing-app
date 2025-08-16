// components/ui/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      aria-pressed={active}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm border transition ${
        active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
