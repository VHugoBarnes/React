// Lección 39. PropTypes

/*
Para usar verificación de tipos en las props de un componente, 
puedes asignar la propiedad especial PropTypes:
*/

import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ( {saludo} ) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicación en React</p>
        </>
    );
};

// Con esto obligamos a otros desarrolladores a que 
// trabajen cómo queremos con nuestros componentes
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

export default PrimeraApp;