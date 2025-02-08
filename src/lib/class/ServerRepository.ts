import db from "@/lib/services/sqlite";
import type { ServerConfig } from "../types/database";

class ServerRepository {
  addServer = (server: ServerConfig) => {
    const stmt = db.prepare(`
      INSERT INTO servers (name, host, user, password, port, user_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    stmt.run(
      server.name,
      server.host,
      server.user,
      server.password,
      server.port,
      server.user_id
    );
  };

  getServersByUserId = (user_id: number): ServerConfig[] => {
    const stmt = db.prepare("SELECT * FROM servers WHERE user_id = ?");
    return stmt.all(user_id) as ServerConfig[];
  };
}

export default new ServerRepository();
