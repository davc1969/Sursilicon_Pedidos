import { Application } from "https://deno.land/x/oak@v17.1.0/mod.ts";
import { router } from "./Routes/routes.js"

const app = new Application();

const DENO_PORT = 8009;


app.use(router.routes())
   .addEventListener(
    "listen",
    () => console.log(`Server listening on ${DENO_PORT}`),
   );


await app.listen({ port: DENO_PORT });

