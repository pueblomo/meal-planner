import React, { FC } from "react";

const Searchbar: FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <input
        className="xl:border-2 border-2 border-[#b44593] shadow-lg rounded-lg xl:p-1 p-2 transition duration-150 ease-in-out focus:outline-none xl:text-base text-base"
        placeholder="search recipe"
      />
    </div>
  );
};

export default Searchbar;
