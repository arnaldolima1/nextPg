"use server";
import User from "@/lib/class/User";
import type { createUser } from "@/lib/types/user";

export async function CreateUser({ email, username, password }: createUser) {
  
  const result = await User.createUser({
    email,
    username,
    password,
  });

  return result;
}
