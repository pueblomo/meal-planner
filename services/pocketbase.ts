import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function login(email: string, password: string) {
  return pb.collection("users").authWithPassword(email, password);
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

  return pb.collection("users").create(data);
}
