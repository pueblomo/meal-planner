"use client";

import { useRouter } from "next/navigation";
import React, { type FC, useContext, useEffect } from "react";
import { getFileURL } from "../../services/pocketbase";
import RecipeHeader from "./header";
import Searchbar from "./searchbar";
import { RecipeContext } from "../../contexts/RecipeContext";
import Tab from "../../components/tab";

const RecipesOverview: FC = () => {
  const { recipes, loadRecipes } = useContext(RecipeContext);
  const router = useRouter();

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <section className="h-screen">
      <RecipeHeader />
      <Searchbar />
      <div className="p-3 w-full h-4/5">
        <div className="overflow-auto h-full w-full bg-white rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-start px-3 py-3">
              {recipes.map((recipe) => {
                const fileUrl = getFileURL(recipe, recipe.picture);
                return (
                  <div
                    key={recipe.id}
                    className="relative m-2 w-auto h-auto rounded-lg cursor-pointer"
                    onClick={() => { router.push(`/recipes/${recipe.id}`); }}
                  >
                    <img
                      src={fileUrl}
                      className="h-36 w-36 rounded-lg border shadow-lg xl:h-80 xl:w-80"
                      alt="Recipe Picture"
                    />
                    <p className="absolute right-1 bottom-1 px-2 m-0.5 text-sm font-bold text-white bg-black bg-opacity-50 rounded-lg xl:px-1 xl:m-1 xl:text-base">
                      {recipe.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Tab active={0} />
    </section>
  );
};

export default RecipesOverview;
