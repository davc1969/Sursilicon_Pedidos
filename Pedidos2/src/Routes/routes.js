import { Router } from "jsr:@oak/oak/router";
import { pedidosRoutes } from "./pedidos.js"

export const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "En las rutas desde aca";
  })
  .use("/API", pedidosRoutes.routes())
  .get("/(.*)", (context) => {
    context.response.body = "no hay nadie aquí";
  })



