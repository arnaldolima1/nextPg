import type { z } from "zod";
import { createUserSchema } from "./schemas/user";

export type createUser = z.infer<typeof createUserSchema>