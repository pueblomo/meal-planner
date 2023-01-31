"use client";

import { initialPlannedRecipeContextState, type PlannedRecipeContextType } from "./PlannedRecipeContextType";
import React, { type PropsWithChildren, useState } from "react";
import { type PlannedRecipesRecord, type PlannedRecipesResponse } from "../models/pocketbase-types";
import { createPlannedRecipe, deletePlannedRecipe, getPlannedRecipePage } from "../services/pocketbase";

export const PlannedRecipeContext =
  React.createContext<PlannedRecipeContextType>(
    initialPlannedRecipeContextState
  );

const PlannedRecipeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [plannedRecipes, setPlannedRecipes] = useState<
    PlannedRecipesResponse[]
  >([]);

  const loadPlannedRecipes = (week: string): void => {
    getPlannedRecipePage(week)
      .then((loadedPlannedRecipes) => {
        setPlannedRecipes(loadedPlannedRecipes.items);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const savePlannedRecipe = async (data: PlannedRecipesRecord): Promise<PlannedRecipesResponse> => {
    return await createPlannedRecipe(data);

  };

  const removePlannedRecipe = async (id: string): Promise<boolean> => {
    return await deletePlannedRecipe(id);

  };

  const getPlannedRecipes = (
    day: string,
    week: string
  ): PlannedRecipesResponse[] => {
    return plannedRecipes.filter(
      (plannedRecipes) =>
        plannedRecipes.day === day && plannedRecipes.week === week
    );
  };

  return (
    <PlannedRecipeContext.Provider
      value={{
        plannedRecipes,
        savePlannedRecipe,
        removePlannedRecipe,
        getPlannedRecipes,
        loadPlannedRecipes
      }}
    >
      {children}
    </PlannedRecipeContext.Provider>
  );
};

export default PlannedRecipeProvider;
