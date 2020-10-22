import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el customHook useFetchGifs', () => {
   
    test('Debe de retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Paramore') );
        const { data, loading } = result.current;
        await waitForNextUpdate();


        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });
    
    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Paramore') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).not.toBeTruthy();
    });
    
});
