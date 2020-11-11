import '@testing-library/jest-dom';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';


describe('Pruebas en el authReducer', () => {
   
    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer({logged: false},{});
        expect(state).toEqual({logged: false});
    });
    
    test('Debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Víctor'
            }
        };
        const state = authReducer({}, action);
        expect( state ).toEqual({ name: 'Víctor', logged: true });
    });
    
    test('Debe de borrar el name del usuario y logged en false', () => {
         const action = {
             type: types.logout,
         }
         const state = authReducer({}, action);
         expect( state ).toEqual({ logged: false });
    });
    
});
