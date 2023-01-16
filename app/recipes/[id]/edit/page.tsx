"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import AddRecipeHeader from "./header";
import { useRouter } from "next/navigation";
import { RecipeContext } from "../../../../contexts/RecipeContext";
import RecipeForm, {
  RecipeFormValues,
} from "../../../../components/RecipeForm";
import { RecipesResponse } from "../../../../models/pocketbase-types";

interface EditRecipeProps {
  params: { id: string };
}

const AddRecipe: FC<EditRecipeProps> = ({ params }) => {
  const { updateRecipe, getRecipe, loadRecipes } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState<RecipesResponse | null>(null);
  const router = useRouter();

  useEffect(() => {
    setRecipe(getRecipe(params.id));
  }, []);
  const handleSubmit = (data: RecipeFormValues): void => {
    if (recipe != null) {
      updateRecipe(data, recipe);
    }
    loadRecipes();
    router.push("/recipes");
  };

  return (
    <section className="h-screen">
      <AddRecipeHeader params={params} />
      <RecipeForm recipe={recipe} callback={handleSubmit} />
    </section>
  );
};

export default AddRecipe;
