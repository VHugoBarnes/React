import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// Librerías para hacer test con thunk
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

// Mock para las acciones
jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn(),
}));

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
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en el componente LoginScreen', () => {

    beforeEach( () =>{
        store = mockStore(initState);
        jest.clearAllMocks(); // Cada que usemos mocks hay que limpiarlos
    });
   
    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de disparar la acción de startGoogleLogin', () => {
        wrapper.find('.google-btn').prop('onClick')();
        expect(startGoogleLogin).toHaveBeenCalled();
    });
    
    test('Debe de disparar startLogin con los respectivos argumentos', () => {
        wrapper.find('form').prop('onSubmit')({preventDefault(){}});
        expect(startLoginEmailPassword).toHaveBeenCalled();
        expect(startLoginEmailPassword).toHaveBeenCalledWith('', '');
    });
    
});
