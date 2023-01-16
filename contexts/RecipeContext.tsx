"use client";
import React, { PropsWithChildren } from "react";
import {
  initialRecipeContextState,
  RecipeContextType,
} from "./RecipeContextType";
import { RecipesResponse } from "../models/pocketbase-types";
import {
  createRecipe,
  getRecipePage,
  searchRecipe as pocketbaseSearchRecipe,
  updateRecipe as pocketbaseUpdateRecipe,
} from "../services/pocketbase";
import { RecipeFormValues } from "../components/RecipeForm";

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

  const updateRecipe = (
    data: RecipeFormValues,
    oldRecipe: RecipesResponse
  ): void => {
    pocketbaseUpdateRecipe(data, oldRecipe);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        loadRecipes,
        saveRecipe,
        getRecipe,
        searchRecipe,
        updateRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
