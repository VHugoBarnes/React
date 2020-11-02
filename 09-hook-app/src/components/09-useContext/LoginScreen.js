import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    /**
     * TAREA
     * 1. Obtener referencia al userContext
     * 2. Extraer el setUser del context
     */
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={ () => setUser({id: 1234, user: 'Victor', email: 'hugo@mail.com'})}
            >
                Login
            </button>
        </div>
    );
};
