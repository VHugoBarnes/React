import React from 'react';

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // Reemplaza en la historia la página por la ruta especificada
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
