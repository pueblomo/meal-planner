"use client";
import React, { type FC, useContext, useEffect, useState } from "react";
import { type Days } from "../../models/enums/Days";
import { PlannedRecipeContext } from "../../contexts/PlannedRecipeContext";
import { type PlannedRecipesResponse } from "../../models/pocketbase-types";
import AddButton from "./AddButton";
import { RecipeContext } from "../../contexts/RecipeContext";
import Recipe from "../Recipe";
import { useRouter } from "next/navigation";

interface Props {
  day: Days;
  week: string;
}

const PlannedDay: FC<Props> = ({ day, week }) => {
  const { getPlannedRecipes, plannedRecipes } =
    useContext(PlannedRecipeContext);
  const { getRecipe } = useContext(RecipeContext);
  const [displayedRecipes, setDisplayedRecipes] = useState<
    PlannedRecipesResponse[]
  >([]);

  const router = useRouter();

  useEffect(() => {
    setDisplayedRecipes(getPlannedRecipes(day, week));
    console.log("displayed recipes");
    console.log(displayedRecipes);
  }, [day, week, plannedRecipes]);

  return (
    <div className="flex flex-wrap justify-center">
      {displayedRecipes.map((plannedRecipe) => {
        const recipe = getRecipe(plannedRecipe.recipeId);
        return (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            onClick={() => {
              router.push(`/planner/display/${recipe.id}`);
            }}
          />
        );
      })}
      <AddButton day={day} week={week} />
    </div>
  );
};

export default PlannedDay;
