// Lección 41. Componente CounterApp

import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


const divRoot = document.querySelector('#root');

// ReactDOM.render( <PrimeraApp saludo="Hola Keko Kaka" />, divRoot );
// ReactDOM.render( <PrimeraApp saludo='Hola Mundo' />, divRoot );
ReactDOM.render(<CounterApp value={21} />, divRoot);