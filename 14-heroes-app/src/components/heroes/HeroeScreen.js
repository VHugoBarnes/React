import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroeScreen = () => {

    const { heroId } = useParams();
    const hero = getHeroeById( heroId );

    if(!hero){
        return <Redirect to="/"/>
    }

    return (
        <>
            <h1>Hero Screen</h1>
            <hr/>
        </>
    );
};
