import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })

    // getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Víctor';
        const usuarioActivoTest = {
            uid: 'ABC567',
            username: nombre,
        };

        const usuarioActivo = getUsuarioActivo(nombre);

        expect(usuarioActivo).toEqual(usuarioActivoTest);

    })
    

})
