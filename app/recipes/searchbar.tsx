import React from "react";

const Searchbar = () => {
  return (
    <div className="flex justify-center mt-4">
      <input
        className="border-2 border-[#b44593] shadow-lg rounded-lg p-1 transition duration-150 ease-in-out focus:outline-none"
        placeholder="search recipe"
      />
    </div>
  );
};

export default Searchbar;
