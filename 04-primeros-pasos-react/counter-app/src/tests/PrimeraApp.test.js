import React from 'react';
import { getByText, render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    
    test('Debe mostrar el mensaje "Hola Keko"', () => {
        
        const saludo = 'Hola Keko';

        const { getByText } = render(<PrimeraApp saludo={ saludo }/>);

        expect( getByText(saludo) ).toBeInTheDocument();
        
    });
    
});
