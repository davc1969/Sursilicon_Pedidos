import { getOnePedido } from "../services/pedidosServices.js";


const getOnePedido2 = async ({ params, response }) => {
  const pedidoId = params.id;
  const pedidoBuscado = await getOnePedido(pedidoId);
  
  if (!pedidoBuscado) {
    response.status = 404;
    response.body = {Error: "Pedido no encontrado"}
    return 
  }
  response.body = pedidoBuscado
};

export { getOnePedido2 }