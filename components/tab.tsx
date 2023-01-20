import React, { FC } from "react";
import Link from "next/link";
import RecipeIcon from "./icons/recipeIcon";
import ShoppingIcon from "./icons/shoppingIcon";
import PlannerIcon from "./icons/plannerIcon";

interface Props {
  active?: number;
}

const Tab: FC<Props> = ({ active }) => {
  return (
    <div className="flex bg-white p-2 justify-evenly">
      <Link
        href="/recipes"
        className="rounded-full border border-gray-300 py-2 px-4 text-center mr-2 shadow-sm"
        data-cy="link-recipes"
      >
        <RecipeIcon color={active === 0 ? "#b44593" : ""} />
      </Link>
      <Link
        href="/planner"
        className="rounded-full border border-gray-300 py-2 px-4 text-center mr-2 shadow-sm"
      >
        <PlannerIcon color={active === 0 ? "#b44593" : ""} />
      </Link>
      <Link
        href="/shopping-list"
        className="rounded-full border border-gray-300 py-2 px-4 text-center shadow-sm"
      >
        <ShoppingIcon color={active === 0 ? "#b44593" : ""} />
      </Link>
    </div>
  );
};

export default Tab;
