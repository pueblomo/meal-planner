"use client";

import { useRouter } from "next/navigation";
import React, { FC, useContext, useEffect } from "react";
import { getFileURL } from "../../services/pocketbase";
import RecipeHeader from "./header";
import Searchbar from "./searchbar";
import { RecipeContext } from "../../contexts/RecipeContext";

const RecipesOverview: FC = () => {
  const { recipes, loadRecipes } = useContext(RecipeContext);
  const router = useRouter();

  useEffect(() => {
    loadRecipes();
  }, []);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <section className="h-screen">
      <RecipeHeader />
      <Searchbar />
      <div className="p-3 w-full h-full pb-32">
        <div className="overflow-auto h-full w-full bg-white rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-evenly px-3 py-3">
            {recipes.map((recipe) => {
              const fileUrl = getFileURL(recipe, recipe.picture);
              return (
                <div
                  key={recipe.id}
                  className="relative m-2 w-auto h-auto rounded-lg cursor-pointer"
                  onClick={() => router.push(`/recipes/${recipe.id}`)}
                >
                  <img
                    src={fileUrl}
                    className="w-auto h-auto max-h-36 rounded-lg border shadow-lg xl:max-h-80"
                    alt="Recipe Picture"
                  />
                  <p className="absolute right-1 bottom-1 px-2 m-2 text-sm font-bold text-white bg-black bg-opacity-50 rounded-lg xl:px-1 xl:m-1 xl:text-base">
                    {recipe.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesOverview;
