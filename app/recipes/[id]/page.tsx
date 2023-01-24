"use client";
import React, {
  type FC,
  type ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { type RecipesResponse } from "../../../models/pocketbase-types";
import { getFileURL } from "../../../services/pocketbase";
import ShowRecipeHeader from "./header";
import { RecipeContext } from "../../../contexts/RecipeContext";
import Chip from "../../../components/chip";

interface ShowRecipeProps {
  params: { id: string };
}

const ShowRecipe: FC<ShowRecipeProps> = ({ params }): ReactElement => {
  const { getRecipe } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState<RecipesResponse | undefined>();
  const [fileUrl, setFileUrl] = useState<string>("");

  useEffect(() => {
    setRecipe(getRecipe(params.id));
  }, []);

  useEffect(() => {
    if (recipe != null) {
      setFileUrl(getFileURL(recipe, recipe.picture));
    }
  }, [recipe]);

  return (
    <section className="h-screen">
      <ShowRecipeHeader params={params} />
      <div className="p-3 w-full h-full pb-16">
        <div className="overflow-auto flex w-full flex-col h-full divide-y-2 bg-white rounded-lg shadow-lg">
          <div className="relative w-full h-1/4">
            <img
              src={fileUrl}
              className="object-cover w-full h-full"
              alt="Recipe Cover"
            />
            <p
              className="absolute right-1 bottom-1 px-2 m-2 text-lg font-bold text-white bg-black bg-opacity-50 rounded-lg xl:px-1 xl:m-1 xl:text-base"
              data-cy="p-name"
            >
              {recipe?.name}
            </p>
          </div>
          <div className="flex flex-wrap items-start ">
            {recipe?.ingredients?.map((ingredient) => {
              return (
                <div
                  className="w-1/2 p-1"
                  key={ingredient.name + ingredient.amount}
                >
                  <Chip>
                    <p>
                      {ingredient.name}: {ingredient.amount}
                    </p>
                  </Chip>
                </div>
              );
            })}
          </div>
          <p className="p-2 whitespace-pre-line" data-cy="p-preparation">
            {recipe?.preparation}
          </p>
        </div>
      </div>
    </section>
  );
};
export default ShowRecipe;
