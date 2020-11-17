import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Web app firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC9p-msd3oc63MfzH5w_JB7xcYtJkgNZHc",
    authDomain: "react-app-cursos-ebd43.firebaseapp.com",
    databaseURL: "https://react-app-cursos-ebd43.firebaseio.com",
    projectId: "react-app-cursos-ebd43",
    storageBucket: "react-app-cursos-ebd43.appspot.com",
    messagingSenderId: "243161818857",
    appId: "1:243161818857:web:5b05833882195373ffb278"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database reference
const db = firebase.firestore();
// Google auth reference
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
