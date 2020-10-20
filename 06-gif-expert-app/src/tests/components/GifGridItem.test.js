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

     const title = 'Un titulo';
     const url = 'http://localhost/algo.jpg';
     let wrapper = shallow( <GifGridItem title={title} url={url}/> );

    beforeEach( () => { wrapper = shallow( <GifGridItem title={title} url={url}/> ) } );
    
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
 }); 
 