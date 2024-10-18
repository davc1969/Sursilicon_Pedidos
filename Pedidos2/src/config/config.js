import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts"

const env = await load()
let db_config = {}

const app_config = {
  APP_PORT : env.APP_PORT,
  DENO_ENV : env.DENO_ENV
}

if (app_config.DENO_ENV == "DEV") {
  db_config = {
    PG_DATABASE: env._DEV_PG_DATABASE,
    PG_USER: env._DEV_PG_USER,
    PG_PASSWORD: env._DEV_PG_PASSWORD,
    PG_HOST: env._DEV_PG_HOST,
    PG_PORT: env._DEV_PG_PORT,
  };
} else if (DENO_ENV == "TEST") {
  db_config = {
    PG_DATABASE: env._TEST_PG_DATABASE,
    PG_USER: env._TEST_PG_USER,
    PG_PASSWORD: env._TEST_PG_PASSWORD,
    PG_HOST: env._TEST_PG_HOST,
    PG_PORT: env._TEST_PG_PORT,
  };
}

export {
  app_config,
  db_config
}