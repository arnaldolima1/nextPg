export type ConnectionDatabase = {
  host: string;
  user: string;
  password: string;
  port: number;
};

export type ServerConfig = {
  id?: number;
  name: string;
  host: string;
  user: string;
  password: string;
  port: number;
  user_id: number;
};