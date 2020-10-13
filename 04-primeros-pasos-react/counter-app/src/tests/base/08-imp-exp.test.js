import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    
    test('Debe de retornar un héroe por ID', () => {
        
        const idTest = 10;
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(h => h.id === idTest);

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe de retornar un undefined si héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    // Debe de retornar un arreglo con los héroes de DC
    // toEqual al arreglo filtrado
    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const ownerTest = 'DC';
        const owner = 'DC'

        const DCHeroes = getHeroesByOwner( owner );
        const DCHeroesData = heroes.filter( h => h.owner === ownerTest);
        expect(DCHeroes).toEqual(DCHeroesData);

    });
    

    // Debe de retornar un arreglo con los héroes de Marvel
    // length = 2 - toBe
    test('Debe de retornar un arreglo con la cantidad de héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const MarvelHeroes = getHeroesByOwner(owner);

        expect(MarvelHeroes.length).toBe(2);

    })
    

    

})
