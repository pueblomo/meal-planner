import React, { type FC } from "react";
import Link from "next/link";
import RecipeIcon from "./icons/recipeIcon";
import ShoppingIcon from "./icons/shoppingIcon";
import PlannerIcon from "./icons/plannerIcon";

interface Props {
  active?: number;
}

const Tab: FC<Props> = ({ active }) => {
  return (
    <div className="flex bg-white p-2 pb-6 justify-evenly absolute inset-x-0 bottom-0">
      <Link
        href="/recipes"
        className={`rounded-full border ${
          active === 0 ? "border-[#b44593]" : "border-gray-300"
        } py-2 px-4 text-center mr-2 shadow-sm`}
        data-cy="link-recipes"
      >
        <RecipeIcon />
      </Link>
      <Link
        href="/planner"
        className={`rounded-full border ${
          active === 1 ? "border-[#b44593]" : "border-gray-300"
        } py-2 px-4 text-center mr-2 shadow-sm`}
        data-cy="link-planner"
      >
        <PlannerIcon />
      </Link>
      <Link
        href="/shopping-list"
        className={`rounded-full border ${
          active === 2 ? "border-[#b44593]" : "border-gray-300"
        } py-2 px-4 text-center mr-2 shadow-sm`}
      >
        <ShoppingIcon />
      </Link>
    </div>
  );
};

export default Tab;
