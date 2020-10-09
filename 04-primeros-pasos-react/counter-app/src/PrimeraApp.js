// Lección 38. Comunicación entre componentes - Props

import React from 'react';


const PrimeraApp = ( {saludo='Hola Mundo'} ) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicación en React</p>
        </>
    );
};

export default PrimeraApp;