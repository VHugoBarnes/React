import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    /**
     * Con este hook podemos hacer un dispatch donde nos encontremos
     * obvio siempre y cuando nos encontremos dentro de la app.
     * 
     * Sacado de la documentación oficial (https://react-redux.js.org/api/hooks#usedispatch):
     * Este hook retorna una referencia de la función `dispatch` del store de Redux
     * 
     * Esto quiere decir que se toma referencia de la función dispatch del store que a su vez
     * está 'linkeado' con el reducer que hicimos (authReducer), que no es más que un 
     * reducer común y corriente.
     */
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: 'victor@gmail.com',
        password: '123456',
    });

    const { email, password } = values;
    
    const handleLogin = (e) => {
        e.preventDefault();
        /**
         * Invocamos el dispatch, en este caso, login
         * este método devuelve {
         *      type: types.login,
         *      payload: {uid, displayName}
         * }
         */
        dispatch( startLoginEmailPassword(email, password) );
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            
            <form onSubmit={ handleLogin }>
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
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Login with Social Networks</p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
            </form>
        </>
    );
};
