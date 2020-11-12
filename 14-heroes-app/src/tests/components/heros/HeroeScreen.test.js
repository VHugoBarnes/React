import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';

import { HeroeScreen } from '../../../components/heroes/HeroeScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en el componente <HeroeScreen/>', () => {
    
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen
                    history={historyMock}
                />
            </MemoryRouter>
        );
        expect( wrapper.find('Redirect').exists() ).toBe( true );
    });
    
    test('Debe de mostrar un hero si el parámetro existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={HeroeScreen}/>
            </MemoryRouter>
        ); 
        expect( wrapper.find('.row').exists() ).toBe( true );
    });
    
    test('Debe de regresar a la pantalla anterior con push', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" 
                component={(props) => <HeroeScreen history={ historyMock } />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).not.toHaveBeenCalled();
    });

    test('Debe de regresar a la pantalla anterior "goBack"', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" 
                component={(props) => <HeroeScreen history={ historyMock } />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( historyMock.goBack ).toHaveBeenCalledWith();
        expect( historyMock.push ).not.toHaveBeenCalled();
    });
   
    test('Debe de llamar al redirect si el hero no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider1111']}>
                <Route path="/hero/:heroId" 
                component={(props) => <HeroeScreen history={ historyMock } />}
                />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');
    });
    
});
