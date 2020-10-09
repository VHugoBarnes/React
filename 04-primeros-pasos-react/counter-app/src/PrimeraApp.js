// Lección 40. Default Props

/*

*/

import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ( { saludo, subtitulo } ) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
    );
};

// Con esto obligamos a otros desarrolladores a que 
// trabajen cómo queremos con nuestros componentes
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

// Añadiremos de igual forma que el forzado de tipos
// los valores por defecto que tendrían los props de nuestros componentes
// Puedes definir los valores por defecto de tus props al asignar 
// la propiedad especial defaultProps:
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp;