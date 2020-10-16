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

    test('Debe de colocar al valor por defecto', () => {
        // Se establece un valor inicial
        const wrapper = shallow( <CounterApp value={ 105 } />);

        // Simulamos dar click dos veces al botón de +
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        // console.log(wrapper.find('h2').text());

        // Simulamos dar click al botón de reset
        wrapper.find('button').at(1).simulate('click');
        // console.log(wrapper.find('h2').text());

        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('105');

    })
    
 });
 