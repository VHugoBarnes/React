import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

jest.mock('../../../actions/auth', () => ({
    startLogin: jest.fn(),
    startRegister: jest.fn(),
}));

// Configuración del store
const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );
const initState = {};
const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store = {store}>
        <LoginScreen />
    </Provider>
);

describe('Pruebas en <LoginScreen/>', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de llamar al dispatch del login', () => {
        wrapper.find('input[name="lEmail"]').simulate('change', {
            target: {
                name: 'lEmail',
                value: 'keko@mail.com'
            }
        });
        
        wrapper.find('input[name="lPassword"]').simulate('change', {
            target: {
                name: 'lPassword',
                value: '123456'
            }
        });

        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        });

        expect( store.dispatch ).toHaveBeenCalledWith(startLogin());

    });
    
    test('No hay registro si las contraseñas son diferentes', () => {
        // 1. Cambiar las contraseñas. Que sean distintas. Simulate
        wrapper.find('input[name="rPassword1"]').simulate('change', {
            target: {
                name: 'rPassword1',
                value: '123456'
            }
        });

        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target: {
                name: 'rPassword2',
                value: '1234566'
            }
        });

        // 2. startRegister no sea llamado
        // Simular submit
        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });
        expect( startRegister ).not.toHaveBeenCalled();

        // 3. Swal.fire se haya llamado con los args 
        expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Las contraseñas deben de ser iguales', 'error');
    });

    test('Registro con contraseñas iguales', () => {
        // 1. Cambiar las contraseñas. Simulate
        wrapper.find('input[name="rPassword1"]').simulate('change', {
            target: {
                name: 'rPassword1',
                value: '123456'
            }
        });

        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target: {
                name: 'rPassword2',
                value: '123456'
            }
        });

        // 2. startRegister no sea llamado
        // Simular submit
        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });
        expect( startRegister ).toHaveBeenCalled();

        // 3. Swal.fire se haya llamado con los args 
        expect( Swal.fire ).not.toHaveBeenCalled();
    });    
    
});
