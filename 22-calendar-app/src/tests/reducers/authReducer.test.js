import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

const initialState = {
    checking: true
};

describe('Pruebas en el authReducer', () => {
    
    test('Debe retornar el estado por defecto', () => {
        const state = authReducer(initialState, {});
        expect( state ).toEqual( initialState );
    });

    test('Debe retornar el estado de login', () => {
        const action = {
            type: types.authLogin,
            payload: {
                uid: '1234',
                name: 'Keko Kaka'
            }
        };
        const state = authReducer(initialState, action);
        expect( state ).toEqual({
            checking: false,
            uid: '1234',
            name: 'Keko Kaka'
        });
    });
    
    test('Debe retornar el estado logout', () => {
        const loginAction = {
            type: types.authLogin,
            payload: {
                uid: '1234',
                name: 'Keko Kaka'
            }
        };
        const loginState = authReducer(initialState, loginAction);
        const logoutAction = { type: types.authLogout };
        const logoutState = authReducer(loginState, logoutAction);

        expect( logoutState ).toEqual({checking: false});
    });
    
});
