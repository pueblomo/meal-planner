"use client";

import { useRouter } from "next/navigation";
import React, { type FC, useContext } from "react";
import RecipeHeader from "./header";
import Searchbar from "../../components/searchbar";
import { RecipeContext } from "../../contexts/RecipeContext";
import Recipe from "../../components/Recipe";

const RecipesOverview: FC = () => {
  const { recipes } = useContext(RecipeContext);
  const router = useRouter();

  return (
    <section className="h-screen">
      <RecipeHeader />
      <Searchbar />
      <div className="p-3 w-full h-[75%]">
        <div className="overflow-auto h-full w-full bg-white rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center px-3 py-3">
              {recipes.map((recipe) => {
                return (
                  <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => {
                      router.push(`/recipes/${recipe.id}`);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesOverview;
