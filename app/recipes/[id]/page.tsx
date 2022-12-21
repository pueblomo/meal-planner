"use client";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { RecipesResponse } from "../../../models/pocketbase-types";
import { getFileURL, getRecipe } from "../../../services/pocketbase";
import ShowRecipeHeader from "./header";

interface ShowRecipeProps {
  params: { id: string };
}

const ShowRecipe: FC<ShowRecipeProps> = ({ params }): ReactElement => {
  const [recipe, setRecipe] = useState<RecipesResponse | undefined>();
  const [fileUrl, setFileUrl] = useState<string | undefined>();

  useEffect(() => {
    setRecipe(getRecipe(params.id));
  }, []);

  useEffect(() => {
    if (recipe != null) {
      setFileUrl(getFileURL(recipe, recipe.picture));
    }
  }, [recipe]);

  return (
    <section className="h-screen">
      <ShowRecipeHeader />
      <div className="p-3 w-full h-full pb-16">
        <div className="overflow-auto flex w-full flex-col h-full divide-y-2 bg-white rounded-lg shadow-lg">
          <div className="relative w-full h-1/4">
            <img
              src={fileUrl}
              className="object-cover w-full h-full"
              alt="Recipe Cover"
            />
            <p className="absolute right-1 bottom-1 px-2 m-2 text-lg font-bold text-white bg-black bg-opacity-50 rounded-lg xl:px-1 xl:m-1 xl:text-base">
              {recipe?.name}
            </p>
          </div>
          <div className="flex flex-wrap justify-around">
            {recipe?.ingredients?.map((ing, key) => {
              return (
                <div className="flex justify-evenly" key={key}>
                  <div className="p-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    {ing.name}
                  </div>
                  <div className="p-2">{ing.amount}</div>
                </div>
              );
            })}
          </div>
          <p className="p-2 whitespace-pre-line">{recipe?.preparation}</p>
        </div>
      </div>
    </section>
  );
};
export default ShowRecipe;
