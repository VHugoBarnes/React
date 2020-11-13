import React from 'react';
import { mount, shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';

import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen/>', () => {
    
    test('Debe de mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    });
    
    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar un error si no se encuentra el Hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman11']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('batman11');
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`There's no hero with batman11`);
        expect(wrapper.find('.alert-danger').exists()).toBeTruthy();
    });

    test('Debe de llamar el push del history', () => {
        const historyMock = {
            push: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman11']}>
                <Route 
                    path="/search" 
                    component={(props) => <SearchScreen history={historyMock}/>}/>
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{
            target: {
                name: 'search',
                value: 'batman',
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`);
    });
    
    
});
