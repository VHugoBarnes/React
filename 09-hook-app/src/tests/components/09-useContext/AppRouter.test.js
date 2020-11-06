import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el Router', () => {
    
    const user = {
        id: 1234,
        name: 'Victor',
        email: 'hugo@mail.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );
    
    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
});
