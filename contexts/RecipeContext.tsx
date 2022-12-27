"use client";
import React, { PropsWithChildren, useMemo } from "react";
import {
  initialRecipeContextState,
  RecipeContextType,
} from "./RecipeContextType";
import { RecipesResponse } from "../models/pocketbase-types";
import {
  createRecipe,
  getRecipePage,
  searchRecipe as pocketbaseSearchRecipe,
} from "../services/pocketbase";
import { RecipeFormValues } from "../app/recipes/add/page";

export const RecipeContext = React.createContext<RecipeContextType>(
  initialRecipeContextState
);

const RecipeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [recipes, setRecipes] = React.useState<RecipesResponse[]>([]);

  const loadRecipes = (): void => {
    getRecipePage()
      .then((loadedRecipes) => setRecipes(loadedRecipes.items))
      .catch((e) => console.log(e));
  };

  const saveRecipe = (recipe: RecipeFormValues): void => {
    createRecipe(recipe);
    loadRecipes();
  };

  const getRecipe = (id: string): RecipesResponse => {
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (recipe != null) {
      return recipe;
    } else {
      throw new Error("Recipe not found");
    }
  };

  const searchRecipe = (searchString: string): void => {
    pocketbaseSearchRecipe(searchString)
      .then((result) => setRecipes(result))
      .catch((e) => console.log(e));
  };

  const memoValue = useMemo(
    () => ({ recipes, loadRecipes, saveRecipe, getRecipe, searchRecipe }),
    []
  );

  return (
    <RecipeContext.Provider value={memoValue}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
