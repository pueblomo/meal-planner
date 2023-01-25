import React, { type FC } from "react";
import { type RecipesResponse } from "../models/pocketbase-types";
import { getFileURL } from "../services/pocketbase";

interface Props {
  recipe: RecipesResponse;
  onClick: () => void;

  active?: boolean;
}

const Recipe: FC<Props> = ({ recipe, onClick, active }) => {
  const fileUrl = getFileURL(recipe, recipe.picture);
  return (
    <div
      className="relative m-2 w-auto h-auto rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={fileUrl}
        className="h-36 w-36 rounded-lg border shadow-lg xl:h-80 xl:w-80"
        alt="Recipe Picture"
      />
      <p
        className={`absolute right-1 bottom-1 px-2 m-0.5 text-sm font-bold ${
          active === true ? "text-amber-400" : "text-white"
        } bg-black bg-opacity-50 rounded-lg xl:px-1 xl:m-1 xl:text-base`}
      >
        {recipe.name}
      </p>
    </div>
  );
};

export default Recipe;
