/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
  PlannedRecipes = "planned_recipes",
  Recipes = "recipes",
  Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;

// System fields
export interface BaseSystemFields {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: Record<string, any>;
}

export type AuthSystemFields = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields;

// Record types for each collection

export interface PlannedRecipesRecord {
  recipeId: string;
  week: string;
  day: string;
  user_id: string;
}

// Record types for each collection
export interface Ingredient {
  name: string;
  amount: string;
}

export interface RecipesRecord {
  name: string;
  ingredients?: null | [Ingredient];
  preparation?: string;
  picture?: string;
  user_id: string;
}

export interface UsersRecord {
  name?: string;
  avatar?: string;
}

// Response types include system fields and match responses from the PocketBase API
export type PlannedRecipesResponse = PlannedRecipesRecord & BaseSystemFields;
export type RecipesResponse = RecipesRecord & BaseSystemFields;
export type UsersResponse = UsersRecord & AuthSystemFields;

export interface CollectionRecords {
  planned_recipes: PlannedRecipesRecord;
  recipes: RecipesRecord;
  users: UsersRecord;
}
