// Lección 37. Impresión de variables en el HTML
// Functional component

import React from 'react';
// import React, { Fragment } from 'react';

// Se puede usar la etiqueta <Fragement></Fragement> para retornar más de una
// etiqueta en las funciones, pero el <></> es mucho más sencillo y no 
// necesitas de importar la desestructuración de Fragment.

const PrimeraApp = () => {

    const saludo = 'Hola, Nicole';
    // const saludo = {
    //     nombre: 'Víctor',
    //     edad: 21
    // }

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera aplicación en React</p>
        </>
    );
};

export default PrimeraApp;