"use client";
import React, {
  type FC,
  type ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { type RecipesResponse } from "../../../models/pocketbase-types";
import ShowRecipeHeader from "./header";
import { RecipeContext } from "../../../contexts/RecipeContext";
import RecipeDisplay from "../../../components/RecipeDisplay";

interface ShowRecipeProps {
  params: { id: string };
}

const ShowRecipe: FC<ShowRecipeProps> = ({ params }): ReactElement => {
  const { getRecipe } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState<RecipesResponse | undefined>();

  useEffect(() => {
    setRecipe(getRecipe(params.id));
  }, []);

  return (
    <section className="h-screen">
      <ShowRecipeHeader params={params} />
      <RecipeDisplay recipe={recipe} />
    </section>
  );
};
export default ShowRecipe;
