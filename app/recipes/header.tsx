import Link from "next/link";
import React from "react";

const RecipeHeader = () => {
  return (
    <div className="flex justify-end p-2 w-full  bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] shadow-lg">
      <Link
        href="/recipes/add"
        className="p-1 text-white rounded-lg border-2 border-[#ee7724] shadow-md"
      >
        Add Recipe
      </Link>
    </div>
  );
};

export default RecipeHeader;
