import Link from "next/link";
import React from "react";

const AddRecipeHeader = () => {
  return (
    <div className="flex px-4 py-2  w-full  bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] shadow-lg">
      <Link
        href="/recipes"
        className="p-1 text-white rounded-lg border-2 border-[#b44593] shadow-md"
      >
        Back
      </Link>
    </div>
  );
};

export default AddRecipeHeader;
