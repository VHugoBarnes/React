import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en el authReducer', () => {
   
    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer({},{});
        expect(state).toEqual({});
    });

    test('Debe de retornar el estado de login', () => {
        const action = {
            type: types.login,
            payload: {
                uid: 1,
                displayName: 'Hugo',
            }
        };
        const state = authReducer({}, action);
        expect(state).toEqual({
            uid: 1,
            name: 'Hugo',
        });
    });
    
    test('Debe de retornar el estado de logout', () => {
        const action = {
            type: types.logout
        };
        const state = authReducer({}, action);
        expect(state).toEqual({});
    });
    
});
