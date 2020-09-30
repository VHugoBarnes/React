// Lección 17. Funciones

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

// No es muy recomendable escribir funciones de la manera anterior,
// para ello, la versión más óptima es escribir una constante para no
// sobreescribir el nombre de la función por error.

const saludo = function(nombre) {
    return `Hola, ${nombre}`;
}

// funciones de flecha (lambda functions)
const saludo2 = (nombre) => {
    return `Hola, ${nombre}`;
}

// cuando lo único que tiene la función es una línea podemos hacer esto:
const saludo3 = (nombre) => `Hola, ${nombre}`
const saludo4 = () => `Hola mundo`;

console.log(saludar('Keko'));
console.log(saludo('Reba'));
console.log(saludo2('Malia'));
console.log(saludo3('Nicole'));
console.log(saludo4());

// Ahora vamos a convertir esta arrow function a algo más simple
const getUser1 = () => {
    return {
        uid: 'ABC123',
        username: 'KekoKaka12',

    }
};

// para simplificar la expresión usamos los parentesís, eso quiere decir que vamos a devolver un 
// objeto
// ESTO SE LLAMA CREAR UN OBJETO IMPLÍCITO
const getUser2 = () =>
    ({
        uid: 'DEF456',
        username: 'MaliaKaka12',
    });

console.log(getUser1());
console.log(getUser2());

// Tarea
// 1. Transformar a arrow function
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = (nombre) => 
({
        uid: 'ABC123',
        username: nombre,
});

const usuarioActivo = getUsuarioActivo('Víctor');
console.log(usuarioActivo);