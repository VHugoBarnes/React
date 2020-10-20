/**
 * Debe mostrar el componente correctamente
 * shallow
 * wrapper
 * wrapper .toMatchSnapshot
 */

 import { shallow } from 'enzyme';
 import '@testing-library/jest-dom';
 import React from 'react';
 import { GifGridItem } from '../../components/GifGridItem';

 describe('Pruebas en el componente <GifGridItem />', () => {

    let wrapper = shallow( <GifGridItem /> );

    beforeEach( () => { wrapper = shallow( <GifGridItem /> ) } );
    
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
 }); 
 