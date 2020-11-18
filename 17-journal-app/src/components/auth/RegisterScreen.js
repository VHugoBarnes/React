import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui);

    // Inicializando nuestro hook para manejar formularios
    const [values, handleInputChange] = useForm({
        username: 'Víctor',
        email: 'hugo@mail.com',
        password: '123456',
        confirmPassword: '123456',
    });

    // Desestructuramos el objeto values que regresa el `useForm`
    const { username, email, password, confirmPassword } = values;
    // Procedemos a mandarlo como value dentro de los input.

    // Handler para manejar el registro
    // DE MOMENTO: imprimir en consola los values de los input
    const handleRegister = ( e ) => {
        // Prevenimos el comportamiento por defecto al hacer submit
        e.preventDefault();
        
        if( isFormValid() ){
            dispatch(startRegisterWithEmailPasswordName(username, email, password));
        }
    }

    // Comprobar si el formulario es valido.
    const isFormValid = () => {
        if(username.trim().length === 0) {
            console.log('Name is required');
            dispatch(setError('Name is required'));
            return false;
        } else if( !validator.isEmail(email) ) {
            console.log('Email is not correct');
            dispatch(setError('Email is not correct'));
            return false;
        } else if( password !== confirmPassword || password.length < 5){
            console.log('Password should be at least 6 characters and match');
            dispatch(setError('Password should be at least 6 characters and match'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            
            <form onSubmit={ handleRegister }>

                {
                    msgError !== null 
                        && <div className="auth__alert-error">
                                { msgError }
                            </div>
                }

                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="auth__input"
                    autoComplete="off"
                    value={ username }
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="auth__input"
                    value={ confirmPassword }
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>
                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>
            </form>
        </>
    );
};
