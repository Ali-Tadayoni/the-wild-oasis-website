"use server";

import { signIn, signOut } from "./auth";

// The functoins in this file are never leaked to client.

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
