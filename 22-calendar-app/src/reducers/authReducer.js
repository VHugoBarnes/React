import { types } from '../types/types';

/**
 * Al comienzo de la página el estado
 * sólo tiene el checking en false.
 * Cuando el usuario se autentica el estado pasa
 * a tener uid y name almacenado en el store.
 */
const initialState = {
    checking: true,
    // uid: null,
    // name: null
}

export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {

        /**
         * Si se hace log se cambia el estado y pasa
         * a tener el uid y el name del usuario.
         */
        case types.authLogin:
            return {
                ...state,   // copiamos el state, por si en un futuro se agrega algo más.
                checking: false, // Ya no estamos checando si está autenticado, porque sí lo está
                ...action.payload
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        default:
            return state;
    }

}