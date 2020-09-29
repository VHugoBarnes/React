// Lección 14. Template string

const nombre = 'Víctor Hugo';
const apellido = 'Vázquez Gómez';

// Si quisiera concatenar las dos constantes para crear el nombre completo
// normalmente en javascript base se escribiría de la siguiente manera:

const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

// uno de los usos de los template strings es no tener que concatenar,
// usualmente se realiza de la siguiente manera
const nombreCompletoTS = `${ nombre } ${ apellido } has ${nombreCompleto.length} letters`;

console.log(nombreCompletoTS);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo('Keko') }`);