select p.id, p.fecha,  c.nombre, m.medio, c.contacto, 
       p.pedido, p.descripcion,
       e.nombre,
       d.estado from pedido as p
inner join cliente as c on p.id_cliente = c.id
inner join medio as m on c.id_medio = m.id
inner join encargado as e on p.id_encargado = e.id
inner join estado as d on p.id_estado = d.id;
