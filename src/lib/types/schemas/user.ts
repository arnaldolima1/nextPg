import { z } from "zod";

export const createUserSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Minimum 5 characters" })
    .max(15, { message: "Maximum 15 characters" }),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, { message: "Minimum 8 characters" })
    .max(15, { message: "Maximum 15 characters" }),
});
