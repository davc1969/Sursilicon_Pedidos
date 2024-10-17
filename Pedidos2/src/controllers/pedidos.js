// const { StatusCodes: httpCodes } = require("http-status-codes");
// const httpError = require("../utils/httpErrorsHandler");
// const poolQuery = require("../db/pg_pool_services").pgPoolQuery;
// const { v4: uuidv4 } = require('uuid');
// const { postPedidoSchema, updatePedidoSchema } = require("../config/joi");
// const { validateSchema } = require("../utils/joi");
// const cOut = require("../utils/cOut");
// const { apiResponse, apiMessages } = require("../models/Pedidos");


// const createApiOutput = (ok, code, data) => {

//     return {
//         ok,
//         code,
//         message: apiMessages[code],
//         data
//     }
// }

// const checkPedidoTime = (PedidoDate, PedidoTime) => {
//     const dateApp = new Date(PedidoDate + " " + PedidoTime);
//     const day = dateApp.getDay();
//     const hour = dateApp.getHours();
//     return ( day > 0 && day <= 5 && hour >= 9 && hour <= 17)
// }

// const checkAvailability = async (PedidoDate, PedidoTime) => {
//     const querySQL = {
//         text: "Select * from Pedidos where date = $1 and hour = $2;",
//         values: [PedidoDate, PedidoTime],
//         rowMode: Array
//     }
//     try {
//         const results = await poolQuery(querySQL);
//         const data = JSON.parse(results)
//         return (data.length === 0)
//     } catch (error) {
//         cOut.error("error: ", error);
//         return 1
//     }
// }

// const checkUniqueness = async (email) => {
//     const querySQL = {
//         text: "Select email from Pedidos where email = $1;",
//         values: [email],
//         rowMode: Array
//     }
//     try {
//         const results = await poolQuery(querySQL);
//         const data = JSON.parse(results)
//         return (data.length === 0)
//     } catch (error) {
//         cOut.error("error: ", error);
//         return 1
//     }
// }

// const checkForErrors = async (req, res, type) => {
//     const validTime = checkPedidoTime(req.body.date, req.body.hour)
//     const isAvailable = await checkAvailability(req.body.date, req.body.hour)
//     const isUnique = await checkUniqueness(req.body.email)
//     let errorValidation = false
    
//     let error = 0;
//     if (type == "P") {
//         errorValidation = postPedidoSchema.validate(req.body).error;
//     } else {
//         errorValidation = updatePedidoSchema.validate(req.body).error;
//     }


//     if (errorValidation && (error == 0)) {
//         error = 1;
//         res.status(httpCodes.BAD_REQUEST);
//         res.send( createApiOutput(false, 1100, errorValidation))
//     }

//     if (type == "P") {
//         if (!validTime && (error == 0)) { 
//             error = 1;
//             res.status(httpCodes.FORBIDDEN)
//             res.send( createApiOutput(false, 1102, []) ) 
//         }
    
//         if (!isAvailable && (error == 0)) { 
//             error = 1;
//             res.status(httpCodes.FORBIDDEN)
//             res.send( createApiOutput(false, 1101, []) )
//         }
    
//         if (!isUnique && (error == 0)) { 
//             error = 1;
//             res.status(httpCodes.FORBIDDEN)
//             res.send( createApiOutput(false, 1106, []) )
//         }
//     }

//     return error
// }


// const runQuery = async (req, res, query, httpCodeIfOK, apiCodeIfOk, httpCodeIfNo, apiCodeIfNo, apiCodeIfError) => {
//     try {
//         const results = await poolQuery(query);
//         const data = JSON.parse(results);
//         if (data.length > 0) {
//             res.status(httpCodeIfOK);
//             res.send( createApiOutput(true, apiCodeIfOk, data) )
//         } else {
//             res.status(httpCodeIfNo);
//             res.send( createApiOutput(false, apiCodeIfNo, []) );
//         }
//     } catch (error) {
//         cOut.error("error: ", error);
//         res.status(httpCodes.INTERNAL_SERVER_ERROR);
//         res.send( createApiOutput(false, apiCodeIfError, []) )
//     }
// }


const getPedidos =  (context) => {
    context.response.body = "En las rutas principal de la API desde el controlador";
  }

const getPedidoByDate =   (context) => {
  context.response.body = "En las rutas de busqueda de la API desde el controller";
}


export {
  getPedidos,
  getPedidoByDate
}








