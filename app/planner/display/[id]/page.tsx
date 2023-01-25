"use client";

import React, { type FC, useContext, useEffect, useState } from "react";
import PlannedRecipeDisplayHeader from "./header";
import { type RecipesResponse } from "../../../../models/pocketbase-types";
import { RecipeContext } from "../../../../contexts/RecipeContext";
import RecipeDisplay from "../../../../components/RecipeDisplay";

interface Props {
  params: { id: string };
}

const RecipesOverview: FC<Props> = ({ params }) => {
  const [recipe, setRecipe] = useState<RecipesResponse>();
  const { getRecipe } = useContext(RecipeContext);

  useEffect(() => {
    setRecipe(getRecipe(params.id));
  }, []);

  return (
    <section className="h-screen">
      <PlannedRecipeDisplayHeader />
      <RecipeDisplay recipe={recipe} />
    </section>
  );
};

export default RecipesOverview;
