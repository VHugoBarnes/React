import '@testing-library/jest-dom';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';

describe('Pruebas en el helper fetch', () => {
   
    let token = '';

    test('fetchSinToken debe de funcionar', async() => {
        
        const resp = await fetchSinToken('auth', {email: 'test@mail.com', password: '123456'}, 'POST');
        expect( resp instanceof Response ).toBeTruthy();

        const body = await resp.json();
        expect( body.ok ).toBe(true);

        token = body.token;

    });

    test('fetchConToken debe de funcionar', async() => {
        localStorage.setItem('token', token);
        const resp = await fetchConToken('events/5fd2e75d5e062eb0ccd7e887', {}, 'DELETE');

        const body = await resp.json();

        expect(body.msg).toBe('Evento no exite por ese Id');
    });
    
});
