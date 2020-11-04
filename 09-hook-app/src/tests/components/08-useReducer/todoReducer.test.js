import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el todoReducer', () => {
   
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer( demoTodos, {} );
        expect( state ).toEqual( demoTodos );
    });
    
    test('Debe de agregar un ToDo', () => {
        const newToDo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = {
            type: 'add',
            payload: newToDo,
        };
        const state = todoReducer(demoTodos, action);

        // Esperamos que se haya agregado
        expect( state.length ).toBe( 3 );
        // Vemos si el objeto que se agregó coincide
        expect( state[2] ).toEqual( newToDo );
        // o de otra manera...
        expect( state ).toEqual( [...demoTodos, newToDo] );
    });
    
});
