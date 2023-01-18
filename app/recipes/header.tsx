import Link from "next/link";
import React, { FC } from "react";

const RecipeHeader: FC = () => {
  return (
    <div className="flex justify-end xl:p-2 p-2 w-full  bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] shadow-lg">
      <Link
        href="/recipes/add"
        className="xl:p-1 p-1 text-base xl:text-base text-white rounded-lg border-2 xl:border-2 border-[#ee7724] shadow-md"
        data-cy="link-recipes-add"
      >
        Add Recipe
      </Link>
    </div>
  );
};

export default RecipeHeader;
