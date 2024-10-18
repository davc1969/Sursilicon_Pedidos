select p.id, p.fecha,  c.nombre, m.medio, c.contacto, 
       p.pedido, p.descripcion,
       e.nombre,
       d.estado from pedido as p
inner join cliente as c on p.id_cliente = c.id
inner join medio as m on c.id_medio = m.id
inner join encargado as e on p.id_encargado = e.id
inner join estado as d on p.id_estado = d.id;


select p.id, p.fecha, p.pedido, p.descripcion, 
       c.nombre, m.medio, c.contacto, 
       e.nombre as disenador,
       d.estado,
       (select cast (count(f.id)as INT) from foto as f where f.id_pedido = p.id) as num_fotos, 
       (select count(t.id) from comentario as t where t.id_pedido = p.id) as num_comentarios
from pedido as p
inner join cliente as c on p.id_cliente = c.id
inner join medio as m on c.id_medio = m.id
inner join encargado as e on p.id_encargado = e.id
inner join estado as d on p.id_estado = d.id