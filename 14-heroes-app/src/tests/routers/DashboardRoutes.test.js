import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en el componente <DashboardRoutes/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Víctor'
        }
    }
    
    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount(
            
                <AuthContext.Provider value={ contextValue }>
                    <MemoryRouter>
                        <DashboardRoutes/>
                    </MemoryRouter>
                </AuthContext.Provider>
        );
        
        expect( wrapper ).toMatchSnapshot();

    });
    
});
