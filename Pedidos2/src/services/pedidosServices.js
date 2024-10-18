import PedidoRepo from "../db/db_repository.js";

export const getAllPedidos = async () => {
   const pedidos = await PedidoRepo.selectAll();
   const response = {};

   for (let i = 0; i<pedidos.rows.length; i++) {
      for (let j = 0; j<pedidos.rows[i].length; j++) {
        response[pedidos.rowDescription.columns[j].name] = pedidos.rows[i][j]
      }
    }

   return response

};

// export const getBeer = async beerId => {
//    const beers = await beerRepo.selectById(beerId)
//    if(!beers || beers?.length===0) return null
//    return beers.rowDescription.columns.reduce((acc,el, i) => {
//          acc\[el.name] = beers.rows[0\][i];
//          return acc
//       },{});
// };

// export const createBeer = async beerData => {
//    const newBeer = {
//       name: String(beerData.name),
//       brand: String(beerData.brand),
//       is_premium: "is_premium" in beerData ? Boolean(beerData.is_premium) : false,
//       registration_date: new Date()
//    };

//    await beerRepo.create(newBeer);

//    return newBeer.id;
// };

// export const updateBeer = async (beerId, beerData) => {
//    const beer = await getBeer(beerId);


//    if (Object.keys(beer).length === 0 && beer.constructor === Object) {
//       throw new Error("Beer not found");
//    }

//    const updatedBeer = {...beer,...beerData};

//    beerRepo.update(beerId, updatedBeer);
// };

// export const deleteBeer = async beerId => {
//    beerRepo.delete(beerId);
// };