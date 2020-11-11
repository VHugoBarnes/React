import React from 'react';
import { shallow, mount } from 'enzyme';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';

import { Navbar } from '../../../components/ui/Navbar';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Pruebas en el componente <Navbar/>', () => {
   
    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Víctor'
        }
    }

    afterEach(() => {
        jest.clearAllMocks();
    });

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Víctor' );
    });
    
    test('Debe de llamar el logout y usar el history', () => {
        wrapper.find('button').prop('onClick')();
        expect( contextValue.dispatch ).toHaveBeenCalledWith({type: types.logout});
        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    });
    
});
