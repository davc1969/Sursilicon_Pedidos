import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts"

const env = await load()

const config = {
  APP_PORT : env.APP_PORT,
  DENO_ENV : env.DENO_ENV
}

const db_config = {
  PG_DATABASE : env._DEV_PG_DATABASE,
  PG_USER : env._DEV_PG_USER,
  PG_PASSWORD : env._DEV_PG_PASSWORD,
  PG_HOST : env._DEV_PG_HOST,
  PG_PORT : env._DEV_PG_PORT,
}

console.log("cfg fb ", db_config)
export {
  config,
  db_config
}