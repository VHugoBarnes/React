// Lección 13. Objetos literales

const persona = {
    nombre: 'Nicole',
    apellido: 'Rodríguez',
    edad: 20,
    direccion: {
        ciudad: "H. Matamoros",
        zip: 87470,
        lat: 12.123,
        lng: 233.2132,
    },
};

// console.table({persona});
console.log(persona);

// ¡¡¡¡¡¡ESTO NO SE HACE!!!!!!
// const persona2 = persona;
// persona2.nombre = 'Víctor';

// console.log( persona2 );

// Para eso usa el spread de JavaScript (...)
const persona2 = {...persona};
persona2.nombre = 'Víctor';

console.log( persona2 );
console.log( persona );