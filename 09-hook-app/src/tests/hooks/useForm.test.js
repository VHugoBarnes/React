import '@testing-library/jest-dom';
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';
import { Simulate } from 'react-dom/test-utils';

describe('Pruebas en useForm', () => {
   
    const initialForm = {
        name: 'Víctor',
        email: 'hugo@gmail.com',
    };
    
    test('Debe de regresar un formulario por defecto', () => {
        // Se desestructura sólo 'result' de renderHook
        // 'result' contiene 'current' y 'error'.
        // 'current' contiene ahora sí los datos del hook que
        // se está renderizando.
        const { result } = renderHook(() => useForm(initialForm));
        // console.log(result.current[0]);
        expect( result.current[0] ).toEqual( initialForm );
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange ] = result.current;
        // console.log(result.current.handleInputChange);

        act(() =>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Hugo'
                }
            });
        });
        const [ values ] = result.current;
        expect(values).toEqual({...initialForm, name: 'Hugo'});
    });
    
    test('Debe de reestablecer el formulario con reset()', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset ] = result.current;
        // console.log(result.current.handleInputChange);

        act(() =>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Hugo'
                }
            });
            reset();
        });
        const [ values ] = result.current;
        expect(values).toBe(initialForm);
    });
    
});
