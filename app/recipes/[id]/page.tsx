"use client";
import React, { useEffect, useState } from "react";
import { RecipesResponse } from "../../../models/pocketbase-types";
import { getRecipe, getFileURL } from "../../../services/pocketbase";
import ShowRecipeHeader from "./header";

const ShowRecipe = ({ params }: { params: { id: string } }) => {
  const [recipe, setRecipe] = useState<RecipesResponse | undefined>();
  const [fileUrl, setFileUrl] = useState<string | undefined>();

  useEffect(() => {
    setRecipe(getRecipe(params.id));
  }, []);

  useEffect(() => {
    if (recipe) {
      setFileUrl(getFileURL(recipe, recipe.picture));
    }
  }, [recipe]);

  return (
    <section className="h-screen">
      <ShowRecipeHeader />
      <div className="p-2 h-5/6">
        <div className="overflow-auto w-full h-full bg-white rounded-lg shadow-lg">
          <img src={fileUrl} className="object-cover w-full" />
        </div>
      </div>
      <p>{recipe?.id}</p>
    </section>
  );
};

export default ShowRecipe;
