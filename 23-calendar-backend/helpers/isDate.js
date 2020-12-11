const moment = require('moment');

/**
 * Helper para validar si el argumento pasado por 
 * parámetro es una fecha o no.
 */
const isDate = ( value, { req, location, path } ) => {
    if ( !value ) {
        return false;
    }

    const date = moment( value );
    if( date.isValid() ) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isDate }
