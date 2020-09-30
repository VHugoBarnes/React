// Lección 19. Desestructuración de arreglos

const personajes = ['Michael', 'Dwight', 'Pam', 'Jim', 'Erin'];

// Esto puede funcionar, pero es muy tedioso hacerlo.
// console.log(personajes[4]);
// console.log(personajes[2]);
// console.log(personajes[1]);

// Desestructuramos los arrays de la siguiente manera:
const [,,,,p5] = personajes;

console.log(p5);

// para una función...
const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

// Tarea
// 1. El primer valor del arreglo se llamará nombre.
// 2. El segundo se llamará setNombre.
const useState = (valor) => {
    return [valor, ()=>{ console.log('Hola mundo') }];
}

const [nombre, setNombre] = useState('Ellie');
console.log(nombre);
setNombre();