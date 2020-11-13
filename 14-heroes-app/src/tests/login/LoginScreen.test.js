import React from 'react';
import { mount, shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { LoginScreen } from '../../components/login/LoginScreen';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <LoginScreen/>', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
        replace: jest.fn(),
    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    }
   
    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock}/>
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de realizar el dispatch y la navegación', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock}/>
            </AuthContext.Provider>
        );
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalled();
        expect( historyMock.replace ).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect( historyMock.replace ).toHaveBeenCalledWith('/dc');
    });
    
});
