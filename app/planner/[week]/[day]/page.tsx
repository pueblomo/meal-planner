"use client";

import React, { type FC, useContext, useEffect, useState } from "react";
import { RecipeContext } from "../../../../contexts/RecipeContext";
import Searchbar from "../../../../components/searchbar";
import Recipe from "../../../../components/Recipe";
import RecipeHeader from "./header";
import { PlannedRecipeContext } from "../../../../contexts/PlannedRecipeContext";
import { useRouter } from "next/navigation";

interface Params {
  params: { week: string; day: string };
}

const AddPlannedRecipes: FC<Params> = ({ params }) => {
  const [selectedRecipes, setSelectedRecipes] = useState<string[]>([]);
  const { recipes } = useContext(RecipeContext);
  const { savePlannedRecipe, getPlannedRecipes, removePlannedRecipe, loadPlannedRecipes } =
    useContext(PlannedRecipeContext);
  const router = useRouter();

  useEffect(() => {
    const plannedRecipes = getPlannedRecipes(params.day, params.week);
    plannedRecipes.forEach((recipe) => {
      setSelectedRecipes((prevState) => [...prevState, recipe.recipeId]);
    });
  }, []);

  const handleAddPlannedRecipes = async (): Promise<void> => {
    const plannedRecipes = getPlannedRecipes(params.day, params.week);
    const plannedRecipesIds = plannedRecipes.map((recipe) => recipe.recipeId);
    const newlyAddedRecipes = selectedRecipes.filter(
      (recipeId) => !plannedRecipesIds.includes(recipeId)
    );
    const removedRecipesIds = plannedRecipes
      .filter((recipe) => !selectedRecipes.includes(recipe.recipeId))
      .map((recipe) => recipe.id);

    for (const recipeId of removedRecipesIds) {
      await removePlannedRecipe(recipeId);
    }

    for (const recipeId of newlyAddedRecipes) {
      await savePlannedRecipe({
        recipeId,
        week: params.week,
        day: params.day,
        user_id: ""
      });
    }
    loadPlannedRecipes(params.week);
    router.push("/planner");
  };

  return (
    <div className="h-screen">
      <RecipeHeader />
      <div className="flex justify-evenly items-center">
        <Searchbar />
        <button
          className="text-lg h-fit w-fit shadow-lg mt-4 self-center p-2 leading-tight text-white rounded-lg border bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] uppercase"
          data-cy="button-add"
          onClick={handleAddPlannedRecipes}
        >
          SAVE
        </button>
      </div>
      <div className="p-3 w-full h-4/5">
        <div className="overflow-auto h-full w-full bg-white rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center px-3 py-3">
              {recipes.map((recipe) => {
                return (
                  <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    active={selectedRecipes.includes(recipe.id)}
                    onClick={() => {
                      setSelectedRecipes((prevState) => {
                        if (prevState.includes(recipe.id)) {
                          return [
                            ...prevState.filter((rec) => rec !== recipe.id)
                          ];
                        }
                        return [...prevState, recipe.id];
                      });
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlannedRecipes;
