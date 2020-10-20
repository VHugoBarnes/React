import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { getGif } from '../../helpers/getGif';

describe('Pruebas con el helper getGif - Fetch', () => {
   
    test('Debe de traer 10 elementos', async() => {
       const gifs = await getGif('Ellie Kemper'); 

       expect( gifs.length ).toBe( 10 );
    });

    test('No debe traer elementos', async() => {
        const gifs = await getGif(''); 
 
        expect( gifs.length ).toBe( 0 );
     });
    
});
