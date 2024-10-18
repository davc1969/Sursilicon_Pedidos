import { Router } from "jsr:@oak/oak/router";

export const pedidosRoutes = new Router();
import  { getAllPedidos2 }   from "../controllers/getAllPedidos.js";
import  { getOnePedido2 }    from "../controllers/getOnePedido.js";
import  { crearPedido }     from "../controllers/crearPedido.js";
import  { modificarPedido } from "../controllers/modificarPedido.js";
import  { borrarPedido }    from "../controllers/borrarPedido.js";


pedidosRoutes
  .get("/", (context) => {
    return getAllPedidos2(context)
  })
  .get("/:id", (context) => {
    return getOnePedido2(context)
  })
  .post ("/new", (context) => {
    context.response.body = crearPedido(context)
  })
  .put ("/:id", (context) => {
    context.response.body = modificarPedido(context)
  })
  .delete ("/:id", (context) => {
    context.response.body = borrarPedido(context)
  })



