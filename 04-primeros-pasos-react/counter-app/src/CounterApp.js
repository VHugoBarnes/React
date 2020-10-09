// Lección 41. Componente CounterApp

// USAR EL SNIPPET: rafcp para obtener el esqueleto de nuestro FC con Props

import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
        </>
    );

};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;
