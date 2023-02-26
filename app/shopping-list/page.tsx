"use client";

import React, { type ReactElement, useContext, useEffect } from "react";
import ShoppingHeader from "./header";
import { ShoppingListContext } from "../../contexts/ShoppingListContext";
import { PlannedRecipeContext } from "../../contexts/PlannedRecipeContext";
import { RecipeContext } from "../../contexts/RecipeContext";

export default function ShoppingList(): ReactElement {
  const { items, setItems } = useContext(ShoppingListContext);
  const { plannedRecipes } = useContext(PlannedRecipeContext);
  const { getRecipe } = useContext(RecipeContext);

  useEffect(() => {
    const itemsSet = new Set<string>();
    plannedRecipes.map(recipe => {
      return getRecipe(recipe.recipeId);
    }).forEach(recipe => {
      recipe.ingredients?.forEach(ingredient => {
        itemsSet.add(ingredient.name);
      });
    });
    setItems(itemsSet);
  }, [plannedRecipes]);

  return (
    <section className="h-screen">
      <ShoppingHeader />
      <div className="p-3 w-full h-[80%]">
        <div className="overflow-auto h-full w-full bg-white rounded-lg shadow-lg">
          {items.map(item => {
            return (
              <div key={item.label} className="p-2 border-b-2">
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}