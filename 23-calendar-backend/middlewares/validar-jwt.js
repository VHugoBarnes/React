const { response } = require('express');
const jwt = require('jsonwebtoken');

/**
 * Esta validador de JWT nos permitirá validar si el token
 * que le mandamos en el header de la petición es valido aún.
 */
const validarJWT = (req, res = response, next) => {
    // ¿Cómo recibir el JWT? : x-token en los headers
    const token = req.header('x-token');
    
    // Validar JWT
    // Validar si se recibió un token en el header.
    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        // Verificar el JWT con la clave secreta con la que se creó.
        // Devuelve el payload (en este caso constituido por un objeto que contiene
        // el uid y el name del usuario)
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED 
        );

        // Modificamos el request para que cualquier petición en la cual
        // haya pasado el JWT disponga del uid y del name facilmente.
        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido',
        });
    }

    next();
}

module.exports = {
    validarJWT,
};