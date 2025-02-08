import Database from "./Database";

type ServerConfig = {
  host: string;
  user: string;
  password: string;
  port: number;
};

class ConnectionManager {
  private servers: Map<string, Database> = new Map();

  addServer(name: string, config: ServerConfig) {
    if (this.servers.has(name)) {
      return;
    }
    this.servers.set(name, new Database(config));
  }

  getServer(name: string): Database {
    const server = this.servers.get(name);
    if (!server) {
      throw new Error(`Server "${name}" not found`);
    }
    return server;
  }

  removeServer(name: string) {
    if (!this.servers.has(name)) {
      throw new Error(`Server "${name}" not found`);
    }
    this.servers.delete(name);
  }
}

export const connectionManager = new ConnectionManager();
