// Lección 20. Import, Export y funciones comunes de arreglos
// Lección 21. Múltiples exportaciones y exportaciones por defecto

import heroes, {owners} from './data/heroes';

// console.log(owners)

// import { heroes } from './data/heroes';
// import {heroes} from './data/heroes';


// console.log(heroes);

// const getHeroeById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if ( heroe.id === id ) {
//             return true;
//         }else{
//             return false;
//         }
//     });
// };

const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);
// console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
}