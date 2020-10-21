import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    // De momento pondremos una función sin cuerpo
    const setCategories = jest.fn();
   
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => { 
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    } );

    test('El componente debe de renderizarse', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de cambiar la caja de texto', () => {
       const input = wrapper.find('input');

       const value = 'Hola Mundo';
       input.simulate('change', { target: { value: value } });

       expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe de ingresar la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled()
    });
    
    test('Debe de llamar al setCategories y limpiar la caja de texto', () => {
        /**
         * 1. Simular el inputChange
         * 2. Simular el submit
         * 3. setCategories se debe de haber llamado
         * 4. el valor del input debe de estar ''
         */

         // 1. Simular el inputChange
         wrapper.find('input').simulate('change', {target: {value: 'Hola'}});

         // 2. Simular el submit
         wrapper.find('form').simulate('submit', {preventDefault(){}});

         // 3. setCategories se debe de haber llamado
         expect( setCategories ).toHaveBeenCalled();

         // 4. El valor del input de de estar ''
         expect( wrapper.find('input').prop('value') ).toBe('');


    })
    
});
