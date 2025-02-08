import { Pool } from "pg";
import type { ConnectionDatabase } from "@/lib/types/database";

class Database {
  private pool: Pool;

  constructor({ host, user, password, port }: ConnectionDatabase) {
    this.pool = new Pool({
      host,
      user,
      database: 'postgres',
      password,
      max: 20,
      port,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
  }

  async query<T>(sql: string, params?: []) {
    const client = await this.pool.connect();
    try {
      const result = await client.query(sql, params);
      return result.rows;
    } catch (error: any) {
      client.release();
    }
  }

  async getDataBases(): Promise<string[]> {
   
    const result = await this.query<{ datname: string }>(
      "SELECT datname FROM pg_database WHERE datistemplate = false;"
    );

    if (result) return result.map((db) => db.datname);
    return [];
  }

  async getTables(): Promise<string[]> {
    const result = await this.query<{ tablename: string }>(
      "SELECT tablename FROM pg_tables WHERE schemaname = 'public';"
    );

    if (result) return result.map((table) => table.tablename);
    return [];
  }

  async executeSQL(sql: string): Promise<any> {
    return this.query(sql);
  }
}

export default Database;
