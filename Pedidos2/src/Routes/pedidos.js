import { Router } from "jsr:@oak/oak/router";

export const pedidosRoutes = new Router();
import  { getAllPedidos }   from "../controllers/getAllPedidos.js";
import  { getOnePedido }    from "../controllers/getOnePedido.js";
import  { crearPedido }     from "../controllers/crearPedido.js";
import  { modificarPedido } from "../controllers/modificarPedido.js";
import  { borrarPedido }    from "../controllers/borrarPedido.js";


pedidosRoutes
  .get("/", (context) => {
    context.response.body = getAllPedidos(context)
  })
  .get("/:id", (context) => {
    context.response.body = getOnePedido(context)
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



