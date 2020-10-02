// Lección 22. Promesas

import { getHeroeById } from './datos';

// const promesa = new Promise(( resolve, reject ) => {

//     setTimeout( () => {
//         // console.log('2 segundos después');
//         // resolve();

//         // Tarea
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         // reject('No se pudo encontrar al heroe');
//         resolve('No se pudo encontrar al heroe');
        
//     }, 2000);

// });

// promesa.then( (heroe) => {
//     console.log(heroe.name);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    const promesa = new Promise(( resolve, reject ) => {

        setTimeout( () => {

         const heroe = getHeroeById(id);         
         if (heroe) {
             resolve(heroe);
         } else {
             reject('No se pudo encontrar al heroe');
         }
        
        }, 2000);

    });

    return promesa;

};

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);