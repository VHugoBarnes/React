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

    test('Debe de mostrar el subtítulo envíado por props', () => {
        const saludo = 'Hola Keko';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( <PrimeraApp 
            saludo={ saludo } 
            subtitulo={ subtitulo }
        /> );

        const textoParrafo = wrapper.find('p').text();
        
        expect( textoParrafo ).toBe(subtitulo);

    });
            
});
