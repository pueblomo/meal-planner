"use client";
import { useRouter } from "next/navigation";
import React, { FC, useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import Input from "../../../components/input/input";
import AddRecipeHeader from "./header";
import { RecipeContext } from "../../../contexts/RecipeContext";

export interface RecipeFormValues {
  name: string;
  preparation: string;
  picture: string[];
  ingredients: Array<{ name: string; amount: string }>;
}

const AddRecipe: FC = () => {
  const { register, handleSubmit, control } = useForm<RecipeFormValues>();
  const { saveRecipe } = useContext(RecipeContext);

  const { fields, append } = useFieldArray({
    name: "ingredients",
    control,
  });

  const router = useRouter();

  const onSubmit = (data: RecipeFormValues): void => {
    saveRecipe(data);
    router.push("/recipes");
  };

  return (
    <section className="h-screen">
      <AddRecipeHeader />
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
            />
            <textarea
              id="preparation"
              {...register("preparation")}
              name="preparation"
              placeholder="Preparation guide"
              draggable={false}
              rows={10}
              className="p-1 my-1 w-full xl:text-2xl text-base min-h-[14rem] rounded-md border border-gray-600 transition duration-150 ease-in-out xl:text-base focus:border-[#b44593] focus:outline-none"
            />
            <Input
              id="picture"
              register={register}
              name="picture"
              type="file"
            />
            <div className="flex justify-between items-center">
              <p className="xl:text-base text-base">Ingredients:</p>
              <button
                onClick={() => append({ name: "", amount: "" })}
                className="p-2 font-bold xl:text-2xl text-lg text-[#b44593]"
                type="button"
              >
                +
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
                  />
                  <Input
                    name={`ingredients.${index}.amount`}
                    id={`ingredients.${index}.amount`}
                    placeholder="Amount"
                    register={register}
                  />
                </div>
              );
            })}
            <button
              type="submit"
              className="w-6/12 my-3 xl:text-2xl text-lg shadow-lg self-center xl:p-1 p-2 xl:text-base leading-tight text-white rounded-lg border bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] uppercase"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRecipe;
