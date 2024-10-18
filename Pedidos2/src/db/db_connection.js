import { Client } from "https://deno.land/x/postgres/mod.ts";
import { db_config } from "../config/config.js"
class Database {
  constructor() {
    this.connect();
    console.log("Postgres conectado...")
  }

  async connect() {
   this.client = new Client({
      user: db_config.PG_USER,
      password: db_config.PG_PASSWORD,
      database: db_config.PG_DATABASE,
      hostname: db_config.PG_HOST,
      port: db_config.PG_PORT
    });

    await this.client.connect();
  }
}

export default new Database().client;