// Lección 43. useState Hook

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

const CounterApp = ({ value }) => {

    /**
     * ¿Qué hace la llamada a `useState`? 
     * Declara una "variable de estado". 
     * Nuestra variable se llama `count`, pero se puede llamar como queramos.
     * Esta es una forma de preservar algunos valores entre las llamadas de la función.
     * -`useState` es una nueva forma de usar exactamente las mismas funciones que
     * `this.state` nos da en una clase. Normalmente, las variables 'desaparecen'
     * cuando se sale de la función, pero las variables de estado son conservadas por React.
     * 
     * ¿Qué pasamos a `useState` como argumento?
     * El único argumento para el Hook `useState()` es el estado inicial. Al contrario que
     * en las clases. el estado no tiene por qué ser un objeto. Podemos usar números o strings
     * si es todo lo que necesitamos. En nuestro ejemplo, solamente queremos un número para contar 
     * el número de clics del usuario, por eso pasamos `0` como estado inicial a nuestra 
     * variable. (Si queremos guardar dos valores distintos en el estado, llamaríamos a `useState()
     * dos veces).
     * 
     * ¿Qué devuelve `useState`?
     * Devuelve una pareja de valores: el estado actual, y una función que lo actualiza.
     * Por eso escribimos `const [count, setCount] = useState()`. Esto es similar a 
     * `this.state.count` y `this.setState` en una clase, excepto que se obtienen juntos.
     */
    const [counter, setCounter] = useState(0);

    const handleAdd = (e) => {
        setCounter( counter + 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd } >+1</button>
        </>
    );

};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;
