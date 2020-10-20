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
    });

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //    console.log( img.props() );
        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );
    });
    
    test('El <div> debe de tener la clase animate__fadeInLeft', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__fadeInLeft')).toBe(true);
    });
    
 }); 
 