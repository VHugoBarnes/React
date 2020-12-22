import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

/**
 * 
 * Acción asíncrona que dispara una petición POST
 * al servidor para guardar eventos en la base de datos.
 * 
 * @param {object} event objeto con los datos del evento
 */
export const eventStartAddNew = ( event ) => {
    return async( dispatch, getState ) => {

        // Obtenemos el uid y el name de redux.
        const { uid, name } = getState().auth;
        
        try {
            // Realizar petición POST al server
            const resp = await fetchConToken('events', event, 'POST');
            // Almacenamos en body el objeto que devuelve el server
            const body = await resp.json();
            
            // Si se guardó correctamente:
            if ( body.ok ) {
                // Guardar en el store propiedades
                // en event
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                dispatch( eventAddNew( event ) );
            }

        } catch (error) {
            console.error(error);
        }

    }
}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({type: types.eventClearActiveEvent});

export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = () => ({type: types.eventDeleted});

export const eventStartLoading = () => {
    return async( dispatch ) => {

        try {
            
            const resp = await fetchConToken('events');
            const body = await resp.json();

            const events = body.eventos;

            dispatch( eventLoaded(events) );

        } catch (error) {
            console.error(error);
        }

    }
}

const eventLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
});
