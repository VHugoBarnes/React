import { types } from "../types/types";
/**
 * 
 * @param {*} state 
 * @param {*} action
 * 
 * {
 *      uid: 'joadijdoiw21e12321',
 *      name: 'Víctor'
 * } 
 */

export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        case types.logout:
            return { }
    
        default:
            return state;
    }
};
