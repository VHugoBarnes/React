// Lección 16. Arreglos

// esta no es la mejor manera de declarar y usar arreglos en JS.
// esta sintaxis sólo se usa para declarar un array con un tamaño fijo entre comillas.
//const arreglo = new Array();

// esta es la opción más óptima para declarar un arreglo
const arreglo = [1,2,3,4];
console.log(arreglo);

const arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

/*
El método **map()** crea un nuevo array con los resultados de la llamada a la función
indicada aplicados a cada uno de sus elementos
*/

const arreglo3 = arreglo2.map(function(numero){
    return Math.pow(numero, numero);
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo2);