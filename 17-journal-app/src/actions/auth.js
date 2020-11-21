import Swal from 'sweetalert2';

import { types } from "../types/types";
import { googleAuthProvider, firebase } from '../firebase/firebaseConfig';
import { startLoading, finishLoading } from "./ui";
import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading() );
        // auth()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                );
                dispatch( finishLoading() );
            }).catch( e => {
                dispatch( finishLoading() );
                Swal.fire('Fail', e.message, 'error');
            })
    }
};

export const startRegisterWithEmailPasswordName = ( username, email, password ) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({user}) => {
                await user.updateProfile({ displayName: username });
                console.log(user);
                // dispatch(
                //     login(user.uid, user.displayName)
                // );
            }).catch( e => {
                console.log(e);
                Swal.fire('Fail', e.message, 'error');
            });
    }
};

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                );
            });
    }
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async(dispatch) => {
        // Hacemos logout desde firebase
        await firebase.auth().signOut();
        // Borramos el uid de la memoria de la página
        dispatch(logout());
        dispatch(noteLogout());
    }
};

export const logout = () => ({
        type: types.logout
})

