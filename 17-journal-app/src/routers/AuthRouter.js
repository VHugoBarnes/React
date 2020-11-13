import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div>
            {/* 
                ROUTER ... no va...
                switch 
                    path="/auth/login"
                    component={ LoginScreen }

                    path="/auth/register"
                    component={ RegisterScreen }

                Redirect to="/auth/login"
            */}
            <Switch>
                <Route path="/auth/login" component={ LoginScreen }/>
                <Route path="/auth/register" component={ RegisterScreen }/>
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    );
};
