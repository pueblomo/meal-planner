import PocketBase from "pocketbase";
import { RecipeFormValues } from "../app/recipes/add/page";
import { Collections, RecipesResponse } from "../models/pocketbase-types";

const pb = new PocketBase("http://127.0.0.1:8090");

const loadedRecipes: RecipesResponse[] = [];

export async function login(email: string, password: string) {
  pb.authStore.clear();
  return pb.collection(Collections.Users).authWithPassword(email, password);
}

export function authenticationIsValid(): boolean {
  return pb.authStore.isValid;
}

export function createUser(email: string, password: string) {
  const data = {
    username: email.split("@")[0],
    email: email,
    emailVisibility: true,
    password: password,
    passwordConfirm: password,
  };

  return pb.collection(Collections.Users).create(data);
}

export async function getRecipePage(page = 1, size = 20) {
  return pb
    .collection(Collections.Recipes)
    .getList<RecipesResponse>(page, size, {
      filter: `(user_id='${pb.authStore.model?.id}')`,
    });
}

export function createRecipe(recipeData: RecipeFormValues) {
  const formData = new FormData();

  if (recipeData.name) {
    formData.append("name", recipeData.name);
  }

  formData.append("ingredients", JSON.stringify(recipeData.ingredients));

  if (recipeData.preparation) {
    formData.append("preparation", recipeData.preparation);
  }
  if (recipeData.picture) {
    formData.append("picture", recipeData.picture[0]);
  }
  if (pb.authStore.model) {
    formData.append("user_id", pb.authStore.model?.id);
  }

  pb.collection(Collections.Recipes).create(formData);
}

export function getFileURL(record: any, filename: string | undefined) {
  if (filename) {
    return pb.getFileUrl(record, filename);
  }
}

export function setLoadedRecipes(recipes: RecipesResponse[]) {
  loadedRecipes.splice(0, loadedRecipes.length);
  loadedRecipes.push(...recipes);
}

export function getRecipe(id: string): RecipesResponse | undefined {
  return loadedRecipes.find((recipe) => recipe.id === id);
}
