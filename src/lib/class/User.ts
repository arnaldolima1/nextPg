import db from "../services/sqlite";
import { hash, compare } from "bcrypt-ts";
import type { createUser } from "../types/user";

class User {
  createUser({ username, password }: createUser) {
    try {
      const hsh = hash(password, 15);
      const stmt = db
        .prepare("INSERT INTO users (username, password) VALUES (?, ?)")
        .run(username, hsh);
      return stmt.changes > 0 ? true : false;
    } catch (error: any) {
      return false;
    }
  }

  updateUser() {}

  deleteUser() {}

  authenticateUser() {}
}

export default new User();
