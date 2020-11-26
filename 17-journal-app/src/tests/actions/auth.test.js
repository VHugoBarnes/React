import '@testing-library/jest-dom';

import { login, logout } from '../../actions/auth';
import { types } from '../../types/types';

const initState = {
    auth: {
        uid: 'TESTING',
        displayName: 'victor'
    }
}

describe('Pruebas con las acciones de Auth', () => {
    
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
    
});
