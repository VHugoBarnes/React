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
    
    test('Debe de borrar un ToDo', () => {
        const action = {
            type: 'delete',
            payload: 2,
        };

        const state = todoReducer(demoTodos, action);

        // Si se borró el elemento, entonces sólo debe de 
        // haber un elemento en el array
        expect( state.length ).toBe( 1 );
        expect( state[0].id ).toBe(1);
    });
    
    test('Debe de hacer el TOGGLE del ToDo', () => {
        const action = {
            type: 'toggle',
            payload: 2,
        };
        const state = todoReducer(demoTodos, action);

        // Verificamos el valor de la propiedad 'done' del ToDo
        // Debe de estar en 'true'
        expect( state[1].done ).toBeTruthy();
        expect( state[0] ).toEqual(demoTodos[0]);
    });
    
});
