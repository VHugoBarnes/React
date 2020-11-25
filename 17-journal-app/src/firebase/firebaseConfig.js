import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Web app firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9p-msd3oc63MfzH5w_JB7xcYtJkgNZHc",
    authDomain: "react-app-cursos-ebd43.firebaseapp.com",
    databaseURL: "https://react-app-cursos-ebd43.firebaseio.com",
    projectId: "react-app-cursos-ebd43",
    storageBucket: "react-app-cursos-ebd43.appspot.com",
    messagingSenderId: "243161818857",
    appId: "1:243161818857:web:5b05833882195373ffb278"
};

const firebaseConfigTesting = {
    apiKey: "AIzaSyAhJMJ9mzQU-p_PGeimCMyFub_DVLgQzSg",
    authDomain: "testing-redux.firebaseapp.com",
    databaseURL: "https://testing-redux.firebaseio.com",
    projectId: "testing-redux",
    storageBucket: "testing-redux.appspot.com",
    messagingSenderId: "841499302567",
    appId: "1:841499302567:web:cae16d37c0f31d30ffd982"
  };

// Preguntamos si el ambiente es de Testing
if(process.env.NODE_ENV === 'test') {
    // Testing
    firebase.initializeApp(firebaseConfigTesting);
} else {
    // dev-prod
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase

// Database reference
const db = firebase.firestore();
// Google auth reference
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
