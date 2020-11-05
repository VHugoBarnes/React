import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente <LoginScreen />', () => {
   
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de ejecutar el setUser con el argumento esperado', () => {
        const boton = wrapper.find('button');
        // Simulamos dar clic al botón
        boton.simulate('click');
        expect(setUser).toHaveBeenCalledWith( {id: 1234, user: 'Victor', email:'hugo@mail.com'} );
    })
    
});
