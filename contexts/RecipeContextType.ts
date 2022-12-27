import { RecipesResponse } from "../models/pocketbase-types";
import { RecipeFormValues } from "../app/recipes/add/page";

export interface RecipeContextType {
  recipes: RecipesResponse[];
  saveRecipe: (recipeData: RecipeFormValues) => void;
  loadRecipes: () => void;
  getRecipe: (id: string) => RecipesResponse;

  searchRecipe: (searchString: string) => void;
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
};
