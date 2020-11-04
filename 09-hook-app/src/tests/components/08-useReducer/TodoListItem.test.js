import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
// Importación del componente
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
// Importación de valores dummy de todo's
import { demoTodos } from '../../fixtures/demoTodos';

const mockHandleDelete = jest.fn();
const mockHandleToggle = jest.fn();

describe('Pruebas en el componente <TodoListItem />', () => {

    const wrapper = shallow(
    <TodoListItem
        todo={ demoTodos[0] }
        index={ 0 }
        handleDelete={ mockHandleDelete }
        handleToggle={ mockHandleToggle }
    />);
   
    test('Debe de mostrarse correctamente', () => {
        // Aquí hay que crear una snapshot
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de llamar a la función handleDelete', () => {
        // jest.fn()
        // toHaveBeenCalled
        // toHaveBeenCalledWith

        // Seleccionamos el botón delete, con la clase btn-danger
        const deleteButton = wrapper.find('.btn-danger');
        // Simulamos hacer click
        deleteButton.simulate('click');
        expect( mockHandleDelete ).toHaveBeenCalled();
        expect( mockHandleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    });
    
    test('Debe de llamar a la función handleToggle', () => {
        // jest.fn()
        // toHaveBeenCalledWith

        // Hay que simular haber dado clic en el p
        const todoToggle = wrapper.find('p');
        todoToggle.simulate('click');
        expect( mockHandleToggle ).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('Debe mostrar el texto correctamente', () => {
        // contenido del parrafo

        // Hay que verificar que se muestre la descripción del todo correctamente
        const descToDo = wrapper.find('p').text();
        expect( descToDo.includes(demoTodos[0].desc) );
    });
    
    test('Debe de tener la clase "complete"', () => {
       const descToDo = wrapper.find('p');
       expect( descToDo.hasClass('complete') ).toBe( true );
    });
    
});
