"use client";

import React, { FC, ReactNode, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Accordion: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white">
      <button
        className="flex justify-between w-full p-2 border-b-2"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="font-bold">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isOpen && <div className="p-2 border-b-2">{children}</div>}
    </div>
  );
};

export default Accordion;
