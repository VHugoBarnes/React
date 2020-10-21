import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el archivo GifExpertApp', () => {
   
    test('Debe renderizar adecuadamente la app con matchSnapshot', () => {
        const wrapper = shallow( <GifExpertApp /> );

       expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de mostrar una lista de categorias', () => {
        
        const categories = ['Ellie Kemper', 'Minecraft'];

        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    });
    
});
