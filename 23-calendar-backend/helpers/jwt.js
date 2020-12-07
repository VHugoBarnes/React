const jwt = require('jsonwebtoken');

/**
 * Toma por parámetro lo que voy a mandar como payload
 */
const generarJWT = ( uid, name ) => {
     return new Promise( ( resolve, reject ) => {
         const payload = { uid, name };

         /**
          * 1. payload
          * 2. Secret signature
          * 3. options (expiresIn)
          * 4. Callback with err and token
          */
         jwt.sign( payload, process.env.SECRET_JWT_SEED, {
             expiresIn: '2h'
         }, ( err, token ) => {

             if ( err ) {
                console.log(err); // Para el admin del sitio
                reject('No se pudo generar el token'); // Para el usuario
             }

             resolve(token); // Si todo se hace correctamente se devuelve el token

         });

     });
}

module.exports = {
    generarJWT
}
