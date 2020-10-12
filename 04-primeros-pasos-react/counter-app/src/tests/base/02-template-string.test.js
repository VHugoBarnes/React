// Importamos la librería Jest para que nos salgan 
// autocompletados :D
import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe retornar Hola con el nombre', () => {
        
        const nombre = 'Víctor';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
        
    })

    test('getSaludo debe retornar Hola Hugo si no se le pasa ningún parámetro', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Hugo');
    })
    
    

})
