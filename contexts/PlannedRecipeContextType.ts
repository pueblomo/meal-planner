import {
  type PlannedRecipesRecord,
  type PlannedRecipesResponse,
} from "../models/pocketbase-types";

export interface PlannedRecipeContextType {
  plannedRecipes: PlannedRecipesResponse[];
  savePlannedRecipe: (data: PlannedRecipesRecord) => void;
  loadPlannedRecipes: () => void;
  getPlannedRecipes: (day: string, week: string) => PlannedRecipesResponse[];
  removePlannedRecipe: (id: string) => void;
}

export const initialPlannedRecipeContextState: PlannedRecipeContextType = {
  plannedRecipes: [],
  savePlannedRecipe: () => {},
  loadPlannedRecipes: () => {},
  getPlannedRecipes: () => {
    throw new Error("Not yet implemented!");
  },
  removePlannedRecipe: () => {},
};
