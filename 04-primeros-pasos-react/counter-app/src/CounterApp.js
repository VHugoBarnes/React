// Lección 44. handleSubtract y handleReset

/**
 * ¿Qué es un Hook? Un Hook es una función especial que permite 'conectarse'
 * a características de React. Por ejemplo `useState` es un Hook que te permite añadir
 * el estado de React a un componente funcional.
 * 
 * ¿Cuándo debería usar un Hook? Si creas un componente funcional y descubres
 * que necesitas añadirle estado, antes había que crear una clase. Ahora podemos usar
 * un Hook dentro de un componente funcional existente.
 * 
 * Fuente: https://es.reactjs.org/docs/hooks-state.html
 * 
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value=10 }) => {

    const [counter, setCounter] = useState( value );

    const handleAdd = () => setCounter( counter + 1 );

    const handleReset = () => setCounter( value );

    const handleSubtract = () => setCounter( counter - 1 );

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSubtract } >-1</button>
        </>
    );

};

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;
