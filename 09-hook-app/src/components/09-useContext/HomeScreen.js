import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const userContext = useContext(UserContext);
    console.log(userContext);

    return (
        <div>
            <h1 className="mt-3 ml-3">HomeScreen</h1>
            <hr/>
        </div>
    );
};
