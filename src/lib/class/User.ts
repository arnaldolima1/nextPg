import db from "../services/sqlite";
import { hash, compare } from "bcrypt-ts";
import { SqliteError } from "better-sqlite3";
import type { createUser } from "../types/user";

class User {
 
  async createUser({ email, username, password }: createUser) {
    try {
      const hsh = await hash(password, 15);
      const stmt = db
        .prepare(
          "INSERT INTO users (email, username, password) VALUES (?, ?, ?)"
        )
        .run(email, username, hsh);

      return { success: true, message: "" };
    } catch (error: any) {
      if (error instanceof SqliteError) {
        return { success: false, message: error.code };
      }
      return { success: false, message: "" };
    }
  }

  updateUser() {}

  deleteUser() {}

  authenticateUser() {}
}

export default new User();
