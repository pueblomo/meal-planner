"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { set, useFieldArray, useForm } from "react-hook-form";

import Input from "../../../components/input/input";
import { createRecipe } from "../../../services/pocketbase";
import AddRecipeHeader from "./header";

export type RecipeFormValues = {
  name: string;
  preparation: string;
  picture: string[];
  ingredients: { name: string; amount: string }[];
};

const AddRecipe = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RecipeFormValues>();

  const { fields, append, remove } = useFieldArray({
    name: "ingredients",
    control,
  });

  const router = useRouter();

  const onSubmit = (data: RecipeFormValues) => {
    createRecipe(data);
    router.push("/recipes");
  };

  return (
    <section className="h-screen">
      <AddRecipeHeader />
      <div className="p-4 w-full h-full">
        <div className="overflow-auto w-full h-5/6 bg-white rounded-lg shadow-lg">
          <form
            className="flex flex-col gap-2 p-4"
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
              className="p-1 my-1 w-full text-2xl rounded-md border border-gray-600 transition duration-150 ease-in-out xl:text-base focus:border-[#b44593] focus:outline-none"
            />
            <Input
              id="picture"
              register={register}
              name="picture"
              type="file"
            />
            <div className="flex justify-between items-center">
              <p>Ingredients:</p>
              <button
                onClick={() => append({ name: "", amount: "" })}
                className="p-1 font-bold text-2xl text-[#b44593]"
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
              className="w-6/12 mt-3 text-2xl self-center p-1 xl:text-base leading-tight text-white rounded-lg border bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] uppercase"
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
