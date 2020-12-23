import '@testing-library/jest-dom';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';

describe('Pruebas en el helper fetch', () => {
   
    test('fetchSinToken debe de funcionar', async() => {
        
        const resp = await fetchSinToken('auth', {email: 'test@mail.com', password: '123456'}, 'POST');
        expect( resp instanceof Response ).toBeTruthy();

        const body = await resp.json();
        expect( body.ok ).toBe(true);

    });
    
});
