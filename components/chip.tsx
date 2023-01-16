import React from "react";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-gray-200 inline-block rounded-full px-3 py-1 text-sm font-medium text-gray-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Chip;
