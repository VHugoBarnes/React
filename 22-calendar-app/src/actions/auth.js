import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

/**
 * Acción asíncrona que hace una petición al backend
 * para iniciar sesión con los datos mandados por parámetro.
 * 
 * Ocupa thunk, por eso retorna una función (asíncrona).
 * 
 * @param {string} email el correo pasado del formulario
 * @param {string} password la contraseña pasada por el formulario
 */
export const startLogin = ( email, password ) => {
    return async( dispatch ) => {
        
        // Llamada a la API
        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );

        // La respuesta de la API
        const body = await resp.json();
        
        // La API manda un objeto con la propiedad 'ok'
        if ( body.ok ) {
            // Se almacena en el localstorage el JWT generado.
            // Como no es información sensible lo podemos guardar ahí sin problems ;)
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            // Guardar en el store
            dispatch( login({
                uid: body.uid,
                body: body.name
            }) )
        } else { // En caso de errores :o
            Swal.fire('Error', body.msg, 'error');
        }

    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {
        // Llamada a la API
        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );

        // La respuesta de la API
        const body = await resp.json();
        
        // La API manda un objeto con la propiedad 'ok'
        if ( body.ok ) {
            // Se almacena en el localstorage el JWT generado.
            // Como no es información sensible lo podemos guardar ahí sin problems ;)
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            // Guardar en el store
            dispatch( login({
                uid: body.uid,
                body: body.name
            }) )
        } else { // En caso de errores :o
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

/**
 * Acción síncrona para hacer un login en la web.
 * Básicamente lo que hace es guardar en el store el usuario pasado por param.
 * 
 * @param {object} user El objeto que contiene la información del usuario para almacenarlo en el store
 */
const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});