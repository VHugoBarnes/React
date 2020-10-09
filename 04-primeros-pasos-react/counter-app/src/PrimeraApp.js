// Lección 36. Retornar elementos en el componente - Fragment
// Functional component

import React from 'react';
// import React, { Fragment } from 'react';

// Se puede usar la etiqueta <Fragement></Fragement> para retornar más de una
// etiqueta en las funciones, pero el <></> es mucho más sencillo y no 
// necesitas de importar la desestructuración de Fragment.

const PrimeraApp = () => {
    return (
        <>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación en React</p>
        </>
    );
};

export default PrimeraApp;