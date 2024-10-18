import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
  constructor() {
    this.connect();
    console.log("Postgrer conectado...")
  }

  async connect() {
   this.client = new Client({
      user: "postgres",
      database: "sursilicon_pedidos",
      hostname: "127.0.0.1",
      password: "Noopybonito13",
      port: 5432
    });

    await this.client.connect();
  }
}

export default new Database().client;