import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('Debe mostrar el mensaje "Hola Keko"', () => {        
    //     const saludo = 'Hola Keko';
    //     const { getByText } = render(<PrimeraApp saludo={ saludo }/>);
    //     expect( getByText(saludo) ).toBeInTheDocument();        
    // });

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola Keko';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();

    });
        
});
