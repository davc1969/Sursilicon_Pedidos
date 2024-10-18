import client from "./db_connection.js";

class PedidoRepo {
  create(pedido) {
    return client.queryArray`INSERT INTO pedidos (name, brand,is_premium,registration_date) VALUES (${pedido.name}, ${pedido.brand}, ${pedido.is_premium},${pedido.registration_date})`;
  }

  selectAll() {
    let qry = "";
    qry += "select p.id, p.fecha,  c.nombre, m.medio, c.contacto, ";
    qry += "p.pedido, p.descripcion, ";
    qry += "e.nombre, d.estado, "
    qry += "(select cast (count(f.id) as INT) from foto as f where f.id_pedido = p.id) as num_fotos, "
    qry += "(select cast( count(t.id) as INT) from comentario as t where t.id_pedido = p.id) as num_comentarios "
    qry += "from pedido as p ";
    qry += "inner join cliente as c on p.id_cliente = c.id ";
    qry += "inner join medio as m on c.id_medio = m.id ";
    qry += "inner join encargado as e on p.id_encargado = e.id ";
    qry += "inner join estado as d on p.id_estado = d.id;";
    return client.queryArray(qry);
  }
  selectById(id) {
    return client.queryArray`SELECT * FROM pedidos WHERE id = ${id}`;
  }

  update(id, pedido) {
    const latestpedido = this.selectById(id);

    return client.queryArray`UPDATE pedidos SET name = ${
      pedido.name !== undefined ? pedido.name : latestpedido.name
    }, brand = ${
      pedido.brand !== undefined ? pedido.brand : latestpedido.brand
    }, is_premium = ${
      pedido.is_premium !== undefined
        ? pedido.is_premium
        : latestpedido.is_premium
    } WHERE id = ${id}`;
  }

  delete(id) {
    return client.queryArray`DELETE FROM pedidos WHERE id = ${id}`;
  }
}

export default new PedidoRepo();