"use client";
import React, { FC, useContext } from "react";
import AddRecipeHeader from "./header";
import RecipeForm, { RecipeFormValues } from "../../../components/RecipeForm";
import { RecipeContext } from "../../../contexts/RecipeContext";
import { useRouter } from "next/navigation";

const AddRecipe: FC = () => {
  const { saveRecipe } = useContext(RecipeContext);

  const router = useRouter();

  const handleSubmit = (data: RecipeFormValues): void => {
    saveRecipe(data);
    router.push("/recipes");
  };

  return (
    <section className="h-screen">
      <AddRecipeHeader />
      <RecipeForm recipe={null} callback={handleSubmit} />
    </section>
  );
};

export default AddRecipe;
