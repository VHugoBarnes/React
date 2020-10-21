import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    // De momento pondremos una función sin cuerpo
    const setCategories = () => {};
   
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => { wrapper = shallow( <AddCategory setCategories={setCategories}/> ) } );

    test('El componente debe de renderizarse', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de cambiar la caja de texto', () => {
       const input = wrapper.find('input');

       const value = 'Hola Mundo';
       input.simulate('change', { target: { value: value } });

       expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
});
