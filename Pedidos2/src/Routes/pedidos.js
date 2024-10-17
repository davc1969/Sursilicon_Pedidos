import { Router } from "jsr:@oak/oak/router";

export const pedidosRoutes = new Router();
import  { getAllPedidos }  from "../controllers/getAllpedidos.js";
import  { getOnePedido }   from "../controllers/getOnepedido.js";
import  { crearPedido }    from "../controllers/crearPedido.js";
import  { modificarPedido }    from "../controllers/modificarPedido.js";
import  { borrarPedido }    from "../controllers/borrarPedido.js";


pedidosRoutes
  .get("/", (context) => {
    context.response.body = getAllPedidos(context)
  })
  .get("/:id", (context) => {
    context.response.body = "Leer un pedidopor ID";
    getOnePedido(context)
  })
  .post ("/new", (context) => {
    context.response.body = "crear pedido";
    crearPedido(context)
  })
  .put ("/:id", (context) => {
    context.response.body = "modificar pedido";
    modificarPedido(context)
  })
  .delete ("/:id", (context) => {
    context.response.body = "borrar pedido";
    borrarPedido(context)
  })



