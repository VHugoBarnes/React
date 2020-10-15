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
     let wrapper = shallow( <CounterApp /> );

     beforeEach(() => {wrapper = shallow( <CounterApp /> );});
    
    test('Debe mostrar <CounterApp /> correctamente con una snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow( <CounterApp 
            value={ 100 }
        />);
        
        const valorEsperado = wrapper.find('h2').text();

        expect(valorEsperado).toBe('100');

    });
    
    test('Debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text();
        
        expect(counterText).toBe('11');
    });

    test('Debe de decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text();
        
        expect(counterText).toBe('9');
    });
    
 });
 