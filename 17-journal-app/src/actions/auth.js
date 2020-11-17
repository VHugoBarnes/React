import { types } from "../types/types";
import { googleAuthProvider, firebase } from '../firebase/firebaseConfig';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch( login(123, 'Keko') );
        }, 3500);
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
