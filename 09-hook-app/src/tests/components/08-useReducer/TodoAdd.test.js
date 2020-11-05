import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en el componente <TodoAdd />', () => {

    const mockHandleAdd = jest.fn();

    const wrapper = shallow( 
    <TodoAdd
        handleAdd={ mockHandleAdd }
    /> );

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('No debe de llamar handleAdd', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect( mockHandleAdd ).toHaveBeenCalledTimes(0);
    });
    
    test('Debe de llamar a la función handleAdd', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect( mockHandleAdd ).toHaveBeenCalledTimes(1);
        expect( mockHandleAdd ).toHaveBeenCalledWith( expect.any(Object) );
        expect( mockHandleAdd ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
});
