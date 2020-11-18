import React, { useEffect, useState } from 'react';
import { 
    Redirect, 
    Route, 
    BrowserRouter as Router, 
    Switch 
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    // Con esto revisamos la sesión.
    const [checking, setChecking] = useState(true);
    // Revisamos si está autenticado.
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Manteniendo la sesión aunque se recargue el navegador
        // Prácticamente, este es un observable que está atento
        // a si está autenticado el usuario. Si es así, 
        // y si se encuentra el usuario, se dispara el dispatch
        // para hacer login.
        firebase.auth().onAuthStateChanged( (user) => {
            // IMPORTANTE RECORDAR: La sintaxis '?' se refiere a si
            // el valor de la variable no es undefined, procede a obtener
            // el valor después del punto.
            if(user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }
            setChecking(false);
        })
    }, [ dispatch, setChecking, setIsLoggedIn ]);

    // Loading global de la aplicación
    if(checking) {
        return(<h1>Espere...</h1>)
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter }/>
                    <Route exact path="/" component={ JournalScreen }/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    );
};
