import { types } from "../types/types";
import { googleAuthProvider, firebase } from '../firebase/firebaseConfig';
import { startLoading, finishLoading } from "./ui";

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
                console.log(e);
                dispatch( finishLoading() );
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
    }
};

export const logout = () => ({
        type: types.logout
})

