import PocketBase, { type ListResult, type RecordAuthResponse } from "pocketbase";
import {
  Collections,
  type PlannedRecipesRecord,
  type PlannedRecipesResponse,
  type RecipesResponse
} from "../models/pocketbase-types";
import { type RecipeFormValues } from "../components/RecipeForm";


const pb = new PocketBase(process.env.BACKEND);

export async function login(
  email: string,
  password: string
): Promise<RecordAuthResponse<any>> {
  pb.authStore.clear();
  return await pb
    .collection(Collections.Users)
    .authWithPassword(email, password);
}

export function authenticationIsValid(): boolean {
  return pb.authStore.isValid;
}

export async function createUser(
  email: string,
  password: string
): Promise<Record<any, any>> {
  const data = {
    username: email.split("@")[0],
    email,
    emailVisibility: true,
    password,
    name: "Hans",
    passwordConfirm: password
  };

  return await pb.collection(Collections.Users).create(data);
}

export async function getRecipePage(
  page = 1,
  size = 20
): Promise<ListResult<RecipesResponse>> {
  if (pb.authStore.model == null) {
    throw new Error("Model is null");
  }
  return await pb
    .collection(Collections.Recipes)
    .getList<RecipesResponse>(page, size, {
      filter: `(user_id='${pb.authStore.model.id}')`
    });
}

export function createRecipe(recipeData: RecipeFormValues): void {
  const formData = extracted(recipeData);
  if (pb.authStore.model != null) {
    formData.append("user_id", pb.authStore.model?.id);
  }

  pb.collection(Collections.Recipes)
    .create(formData)
    .catch((e) => {
      console.log(e);
    });
}

export async function updateRecipe(
  recipeData: RecipeFormValues,
  oldRecipe: RecipesResponse
): Promise<Record<any, any>> {
  const formData = extracted(recipeData);
  if (pb.authStore.model != null) {
    formData.append("user_id", oldRecipe.user_id);
  }

  return await pb
    .collection(Collections.Recipes)
    .update(oldRecipe.id, formData);
}

function extracted(recipeData: RecipeFormValues): FormData {
  const formData = new FormData();

  if (recipeData.name !== "") {
    formData.append("name", recipeData.name);
  }

  formData.append("ingredients", JSON.stringify(recipeData.ingredients));

  if (recipeData.preparation !== "") {
    formData.append("preparation", recipeData.preparation);
  }
  if (recipeData.picture.length > 0) {
    formData.append("picture", recipeData.picture[0]);
  }
  return formData;
}

export function getFileURL(record: any, filename: string | undefined): string {
  if (filename != null) {
    return pb.getFileUrl(record, filename);
  }
  throw new Error("Filename not set");
}

export async function searchRecipe(
  searchString: string
): Promise<RecipesResponse[]> {
  if (pb.authStore.model == null) {
    throw new Error("Model is null");
  }

  return await pb
    .collection(Collections.Recipes)
    .getFullList<RecipesResponse>(200, {
      filter: `user_id='${pb.authStore.model.id}'&&(name~'${searchString}'||ingredients~'${searchString}')`
    });
}

export async function getPlannedRecipePage(
  week: string,
  page = 1,
  size = 50
): Promise<ListResult<PlannedRecipesResponse>> {
  if (pb.authStore.model == null) {
    throw new Error("Model is null");
  }
  return await pb
    .collection(Collections.PlannedRecipes)
    .getList<PlannedRecipesResponse>(page, size, {
      filter: `user_id = "${pb.authStore.model.id}" && (week = "${week}" || week = "${parseInt(week) + 1}")`
    });
}

export async function createPlannedRecipe(
  data: PlannedRecipesRecord
): Promise<PlannedRecipesResponse> {
  if (pb.authStore.model == null) {
    throw new Error("Model is null");
  }
  return await pb
    .collection(Collections.PlannedRecipes)
    .create({ ...data, user_id: pb.authStore.model.id });
}

export async function deletePlannedRecipe(id: string): Promise<boolean> {
  return await pb.collection(Collections.PlannedRecipes).delete(id);
}
