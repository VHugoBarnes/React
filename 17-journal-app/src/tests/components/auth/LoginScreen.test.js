import '@testing-library/jest-dom';
import React from 'react';

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// Librerías para hacer test con thunk
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};
// El estado del store en este instante
let store = mockStore(initState);

describe('Pruebas en el componente LoginScreen', () => {

    beforeEach( () =>{
        store = mockStore(initState);
    });
   
    test('Debe mostrarse correctamente', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginScreen/>
                </MemoryRouter>
            </Provider>
        );
        expect( wrapper ).toMatchSnapshot();
    });
    
});
