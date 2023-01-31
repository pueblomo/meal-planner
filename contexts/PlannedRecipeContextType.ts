import { type PlannedRecipesRecord, type PlannedRecipesResponse } from "../models/pocketbase-types";

export interface PlannedRecipeContextType {
  plannedRecipes: PlannedRecipesResponse[];
  savePlannedRecipe: (data: PlannedRecipesRecord) => Promise<PlannedRecipesResponse>;
  loadPlannedRecipes: (week: string) => void;
  getPlannedRecipes: (day: string, week: string) => PlannedRecipesResponse[];
  removePlannedRecipe: (id: string) => Promise<boolean>;
}

export const initialPlannedRecipeContextState: PlannedRecipeContextType = {
  plannedRecipes: [],
  savePlannedRecipe: () => {
    throw new Error("Not yet implemented!");
  },
  loadPlannedRecipes: () => {
  },
  getPlannedRecipes: () => {
    throw new Error("Not yet implemented!");
  },
  removePlannedRecipe: () => {
    throw new Error("Not yet implemented!");
  }
};
