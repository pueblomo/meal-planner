"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RecipesResponse } from "../../models/pocketbase-types";
import {
  getFileURL,
  getRecipePage,
  setLoadedRecipes,
} from "../../services/pocketbase";
import RecipeHeader from "./header";
import Searchbar from "./searchbar";

const RecipesOverview = () => {
  const [page, setPage] = useState(1);
  const [recipes, setrecipes] = useState<RecipesResponse[]>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRecipePage(page);
        setPage(result.page);
        setrecipes(result.items);
        setLoadedRecipes(result.items);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <section className="h-screen">
      <RecipeHeader />
      <Searchbar />
      <div className="mx-6 my-4 h-full xl:mx-24 xl:my-16">
        <div className="overflow-auto h-3/4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center px-6 py-6">
            {recipes?.map((recipe, index) => {
              const fileUrl = getFileURL(recipe, recipe.picture);
              return (
                <div
                  key={index}
                  className="relative m-2 w-auto h-auto rounded-lg cursor-pointer"
                  onClick={() => router.push(`/recipes/${recipe.id}`)}
                >
                  <img
                    src={fileUrl}
                    className="w-auto h-auto max-h-40 rounded-lg border shadow-lg xl:max-h-80"
                  />
                  <p className="absolute right-1 bottom-1 px-1 m-1 font-bold text-white bg-black bg-opacity-50 rounded-lg">
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
