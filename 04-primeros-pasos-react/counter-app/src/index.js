// Lección 38. Comunicación entre componentes - Props

import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';



const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimeraApp saludo="Hola Keko Kaka" />, divRoot );