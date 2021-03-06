import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Simulamos ejecutar el useFetchGifs ??????
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'Ellie Kemper';

    test('El componente debe de renderizarse', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();
    });
    
    // Esta prueba sirve para verificar la existencia del componente
    // en el cuerpo del documento
    test('Debe de mostrar items cuando se cargan imágenes', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={ category }/>);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
});
