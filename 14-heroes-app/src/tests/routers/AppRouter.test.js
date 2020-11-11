import React from 'react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter/>', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('Debe de mostrar el login si no está autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el componente de Marvel si está autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Víctor'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );
        
        expect( wrapper.find('.navbar').exists() ).toBe( true );
        // console.log(wrapper.html());
    });    
    
});
