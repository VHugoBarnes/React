import '@testing-library/jest-dom';
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el customHook useCounter', () => {
    
    test('Debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    });
    
});
