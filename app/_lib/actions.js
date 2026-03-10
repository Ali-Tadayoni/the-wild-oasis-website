"use server";

import { signIn } from "./auth";

// The functoins in this file are never leaked to client.

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}
