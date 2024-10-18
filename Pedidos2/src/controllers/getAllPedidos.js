
import { getAllPedidos } from "../services/pedidosServices.js";

const getAllPedidos2 = async ({ response }) => {
  
  const x = await getAllPedidos();
  response.body = x;
};

export { getAllPedidos2 }