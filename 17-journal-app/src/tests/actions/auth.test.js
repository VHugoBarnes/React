import '@testing-library/jest-dom';
// Librerías para hacer test con thunk
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
// El estado del store en este instante
let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {

    beforeEach( () =>{
        store = mockStore(initState);
    });
    
    test('login y logout deben de crear la acción respectiva', () => {
        const loginAction = login('TESTING', 'victor');
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid: 'TESTING',
                displayName: 'victor'
            }
        });
        const logoutAction = logout();
        expect(logoutAction).toEqual({
            type: types.logout
        });
    });
    
    test('Debe de realizar el startLogout', async() => {
        await store.dispatch(startLogout());
        
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.logout
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        });
    });
    
    test('Debe de iniciar el startLoginWithEmailAndPassword', async() => {
        await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));
        const actions = store.getActions();
        
        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                displayName: null,
                uid: 'gqxUIBa3T2RHFxlP9NW9L8KtIJI2'
            }
        });
    });
    
});
