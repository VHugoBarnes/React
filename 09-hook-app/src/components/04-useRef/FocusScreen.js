import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef(1);

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Your name"
            />

            <button 
                className="btn btn-outline-primary mt-4"
                onClick={handleClick}
            >
                Focus
            </button>

        </div>
    )
}
