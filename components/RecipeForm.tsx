"use client";
import React, { FC, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { RecipesResponse } from "../models/pocketbase-types";
import Input from "./input";
import AddIcon from "./icons/addIcon";

export interface RecipeFormValues {
  name: string;
  preparation: string;
  picture: string[];
  ingredients: Array<{ name: string; amount: string }>;
}

interface RecipeFormProps {
  recipe: RecipesResponse | null;
  callback: (data: RecipeFormValues) => void;
}

const RecipeForm: FC<RecipeFormProps> = ({ recipe, callback }) => {
  const { register, handleSubmit, control, setValue } =
    useForm<RecipeFormValues>();

  const { fields, append } = useFieldArray({
    name: "ingredients",
    control,
  });

  const onSubmit = callback;

  useEffect(() => {
    if (recipe != null) {
      setValue("name", recipe.name);
      if (recipe.preparation != null) {
        setValue("preparation", recipe.preparation);
      }

      let ingredientIndex = 0;
      recipe.ingredients?.forEach((ingredient) => {
        append({ name: "", amount: "" });
        setValue(`ingredients.${ingredientIndex}.name`, ingredient.name);
        setValue(`ingredients.${ingredientIndex}.amount`, ingredient.amount);

        ingredientIndex = ingredientIndex + 1;
      });
    }
  }, [recipe]);

  return (
    <div className="p-3 w-full h-full pb-16">
      <div className="overflow-auto w-full h-full bg-white rounded-lg shadow-lg">
        <form
          className="flex flex-col gap-2 p-4 h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="name"
            register={register}
            name="name"
            placeholder="Recipe name"
            dataCy="input-name"
          />
          <textarea
            id="preparation"
            {...register("preparation")}
            name="preparation"
            placeholder="Preparation guide"
            draggable={false}
            rows={10}
            className="p-1 my-1 w-full xl:text-2xl text-base min-h-[14rem] rounded-md border border-gray-600 transition duration-150 ease-in-out xl:text-base focus:border-[#b44593] focus:outline-none"
            data-cy="textarea-preparation"
          />
          <Input
            id="picture"
            register={register}
            name="picture"
            type="file"
            dataCy="input-picture"
          />
          <div className="flex justify-between items-center">
            <p className="xl:text-base text-base">Ingredients:</p>
            <button
              onClick={() => append({ name: "", amount: "" })}
              className="p-2 font-bold xl:text-2xl text-lg text-[#b44593]"
              type="button"
              data-cy="button-add"
            >
              <AddIcon />
            </button>
          </div>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex justify-between">
                <Input
                  name={`ingredients.${index}.name`}
                  id={`ingredients.${index}.name`}
                  placeholder="Ingredient"
                  register={register}
                  dataCy={`input-ingredient-${index}`}
                />
                <Input
                  name={`ingredients.${index}.amount`}
                  id={`ingredients.${index}.amount`}
                  placeholder="Amount"
                  register={register}
                  dataCy={`input-amount-${index}`}
                />
              </div>
            );
          })}
          <button
            type="submit"
            className="w-6/12 my-3 xl:text-2xl text-lg shadow-lg self-center xl:p-1 p-2 xl:text-base leading-tight text-white rounded-lg border bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] uppercase"
            data-cy="button-submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;
