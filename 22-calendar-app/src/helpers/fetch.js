/**
 * La baseURL cambia conforme estemos en prod o en dev.
 * 
 *      Para dev: localhost:4000/api
 *      Para prod: https://mern-calendar-hugobarnes.herokuapp.com/api
 * 
 */
const baseURL = process.env.REACT_APP_API_URL;

/**
 * Esta función permite realizar peticiones a la API sin necesidad de 
 * estar validados con un token de acceso. 
 * Principalmente usado para el login.
 * 
 * @param {string} endpoint el endpoint al que se quiere acceder
 * @param {object} data los datos que se van a mandar a la api
 * @param {string} method el método HTTP que se va a usar en la petición
 */
const fetchSinToken = ( endpoint, data, method='GET' ) => {

    const url = `${baseURL}/${endpoint}`; // ejemplo web.com/api/auth/

    if ( method === 'GET' ) {
        // En el contexto de la aplicación no necesitamos hacer una petición GET
        // pero lo tenemos por si acaso :p
        return fetch( url );
    } else {
        // En caso de ser otro tipo de petición (en este caso un POST),
        // se hace la petición a la API para realizar la acción con los datos que pide.
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data ), // Se usa el stringify para mandar los datos como JSON
        });
    }

}

/**
 * Esta función permite realizar peticiones a la API con un token.
 * Principalmente usado para renovar token, crear y modificar eventos, etc.
 * 
 * @param {string} endpoint el endpoint al que se quiere acceder
 * @param {object} data los datos que se van a mandar a la api
 * @param {string} method el método HTTP que se va a usar en la petición
 */
const fetchConToken = ( endpoint, data, method='GET' ) => {

    const url = `${baseURL}/${endpoint}`; // ejemplo web.com/api/auth/

    // Obtener el token del localStorage
    // OJO: puede devolver un null porque tal vez no lo encuentre
    // para eso usamos el || en caso de no encontrarlo en el ls.
    // Aunque no debería.
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        // En el contexto de la aplicación no necesitamos hacer una petición GET
        // pero lo tenemos por si acaso :p
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        } );
    } else {
        // En caso de ser otro tipo de petición (en este caso un POST),
        // se hace la petición a la API para realizar la acción con los datos que pide.
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data ), // Se usa el stringify para mandar los datos como JSON
        });
    }

}

export {
    fetchSinToken,
    fetchConToken
}