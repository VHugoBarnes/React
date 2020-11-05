import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';

import { TodoList } from '../../../components/08-useReducer/TodoList';


describe('Pruebas en <TodoList />', () => {

    const mockHandleDelete = jest.fn();
    const mockHandleToggle = jest.fn();
    const wrapper = shallow(
        <TodoList 
            todos={ demoTodos }
            handleDelete={ mockHandleDelete }
            handleToggle={ mockHandleToggle }
        />);
   
    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de tener dos <TodoListItem/>', () => {
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        console.log( wrapper.find( 'TodoListItem' ).at(0).props() );
    });
    
});
