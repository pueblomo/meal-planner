import { type RecipesResponse } from "../models/pocketbase-types";
import { type RecipeFormValues } from "../components/RecipeForm";

export interface RecipeContextType {
  recipes: RecipesResponse[];
  saveRecipe: (recipeData: RecipeFormValues) => void;
  loadRecipes: () => void;
  getRecipe: (id: string) => RecipesResponse;
  searchRecipe: (searchString: string) => void;
  updateRecipe: (data: RecipeFormValues, oldRecipe: RecipesResponse) => void;
}

export const initialRecipeContextState: RecipeContextType = {
  recipes: [],
  saveRecipe: () => {},
  loadRecipes: () => {},
  getRecipe: () => {
    throw new Error("Not yet implemented");
  },
  searchRecipe: () => {
    throw new Error("Not yet implemented");
  },
  updateRecipe: () => {
    throw new Error("Not yet implemented");
  },
};
