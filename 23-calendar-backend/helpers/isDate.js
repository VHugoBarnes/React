const moment = require('moment');

/**
 * Helper para validar si el argumento pasado por 
 * parámetro es una fecha o no.
 */
const isDate = ( value, { req, location, path } ) => {

    // Termina de evaluar si el valor es undefined
    if ( !value ) {
        return false;
    }

    // Evaluamos que sea una fecha con moment.js
    const date = moment( value );
    // moment.js tiene su propio validador de fechas
    if( date.isValid() ) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isDate }
