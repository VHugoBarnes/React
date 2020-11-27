import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
// Librerías para hacer test con thunk
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { startRegisterWithEmailPasswordName } from '../../../actions/auth';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

// Configuración de thunk antes de iniciar los tests
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
// Como todas mis acciones son síncronas no hay necesidad de hacer un mock
// store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <RegisterScreen/>', () => {
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe de hacer el dispatch de la acción respectiva', () => {
        const emailField = wrapper.find('input[name="email"]');

        // Hacemos un cambio, simulamos un cambio
        // como estamos trabajando con nuestro customHook
        // necesitamos poner el target para hacer referencia a qué campo
        // se va a cambiar.
        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        });
        
        // Simulamos dar enter al formulario.
        // al no tener nada en el email, debe de disparar la acción correspondiente
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });

        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'Email is not correct'
        });
    });

    test('Debe de mostrar la caja de alerta con el error', () => {
        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'email no es correcto'
            }
        };
        // El estado del store en este instante
        const store = mockStore(initState);

        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBeTruthy();
        expect(wrapper.find('.auth__alert-error').text()).toBe(initState.ui.msgError);
    });
    
});
