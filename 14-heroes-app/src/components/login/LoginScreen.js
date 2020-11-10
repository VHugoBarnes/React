import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // Reemplaza en la historia la página por la ruta especificada
        // history.replace('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'Víctor'
            }
        })
        history.replace('/');
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    );
};
