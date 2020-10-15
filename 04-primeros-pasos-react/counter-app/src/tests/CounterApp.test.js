/**
 * Tarea
 * 
 * 1. Crear las siguientes pruebas para el <CounterApp />
 *      
 *      - Debe mostrar <CounterApp /> correctamente (hacer match con una snapshot)
 *        y sus valores por defecto
 *  
 *      - Debe mostrar el valor por defecto de 100
 *        usar el wrapper.find, tomando el elemento html donde se encuentra el valor contador
 */
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import CounterApp from '../CounterApp';

 describe('Pruebas en <CounterApp />', () => {
    
    test('Debe mostrar <CounterApp /> correctamente con una snapshot', () => {
        const wrapper = shallow( <CounterApp /> );
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow( <CounterApp 
            value={ 100 }
        />);
        
        const valorEsperado = wrapper.find('h2').text();

        expect(valorEsperado).toBe('100');

    });
        
 });
 