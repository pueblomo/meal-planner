"use client";

import {
  initialPlannedRecipeContextState,
  type PlannedRecipeContextType,
} from "./PlannedRecipeContextType";
import React, { type PropsWithChildren, useState } from "react";
import {
  type PlannedRecipesRecord,
  type PlannedRecipesResponse,
} from "../models/pocketbase-types";
import {
  createPlannedRecipe,
  deletePlannedRecipe,
  getPlannedRecipePage,
} from "../services/pocketbase";
import { type Days } from "../models/enums/Days";

export const PlannedRecipeContext =
  React.createContext<PlannedRecipeContextType>(
    initialPlannedRecipeContextState
  );

const PlannedRecipeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [plannedRecipes, setPlannedRecipes] = useState<
    PlannedRecipesResponse[]
  >([]);

  const loadPlannedRecipes = (): void => {
    getPlannedRecipePage()
      .then((loadedPlannedRecipes) => {
        setPlannedRecipes(loadedPlannedRecipes.items);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const savePlannedRecipe = (data: PlannedRecipesRecord): void => {
    createPlannedRecipe(data)
      .then(() => {
        loadPlannedRecipes();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removePlannedRecipe = (id: string): void => {
    deletePlannedRecipe(id)
      .then((result) => {
        if (!result) {
          console.log("Can't delete planned recipe");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getPlannedRecipes = (
    day: Days,
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
        loadPlannedRecipes,
      }}
    >
      {children}
    </PlannedRecipeContext.Provider>
  );
};

export default PlannedRecipeProvider;
