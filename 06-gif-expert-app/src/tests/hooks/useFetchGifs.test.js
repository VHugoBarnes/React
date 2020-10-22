import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el customHook useFetchGifs', () => {
   
    test('Debe de retornar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('Paramore') );
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });
    
});
