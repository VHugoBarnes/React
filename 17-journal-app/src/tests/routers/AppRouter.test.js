import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// Librerías para hacer test con thunk
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import {firebase} from '../../firebase/firebaseConfig';

import { AppRouter } from '../../routers/AppRouter';
import { login } from '../../actions/auth';
import { act } from '@testing-library/react';
import Swal from 'sweetalert2';

// Mock de sweetalert2
jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

// Mock para las acciones
jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'abc'
        },
        notes: []
    }
};
// El estado del store en este instante
let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en el AppRouter', () => {
    
    test('Debe de llamar al login si estoy autenticado', async() => {

        let user;

        await act(async () =>{
            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456');
            
            user = userCred.user;

            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(login).toHaveBeenCalledWith('gqxUIBa3T2RHFxlP9NW9L8KtIJI2', null);
    });
    
});
