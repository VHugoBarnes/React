import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
// import '../02-useEffect/effects.css';
import './layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const { data  } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log( pTag.current.getBoundingClientRect() );
    },[quote]);

    return (
        <div>
            <h2>LayoutEffect</h2>
            <hr />

            <>
                <blockquote className="blockquote text-right" >
                    <p 
                    ref={ pTag }
                    className="mb-0"
                    >{ quote }</p>
                </blockquote>
                <button className="btn btn-primary" onClick={increment}>
                    Siguiente quote
                </button>
            </>

        </div>
    );

};
