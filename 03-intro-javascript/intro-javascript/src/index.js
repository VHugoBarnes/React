// Lección 18. Desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironman',
    rango: 'Soldado'
};

// Comienza la desestructuración con esta sintaxis
const {nombre} = persona

console.log(nombre);

// Veamos, si tenemos una variable con el mismo nombre del
// atributo al que queremos acceder del objeto nos marcaría error
// en estas situaciones podemos hacer esto:
const edad = 21;

const {edad:edadPersona} = persona;

console.log(edadPersona);
console.log(edad);


// console.log(persona.edad);
// console.log(persona.clave);

// Desestructuración en los parámetros de una función
const useContext = ({clave, nombre, edad, rango='Capitán'}) => {
    
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3113,
            lng: 33.1222,
        }
    }
    
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios, lat, lng);