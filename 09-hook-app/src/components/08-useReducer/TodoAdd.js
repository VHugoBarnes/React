import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <=1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAdd( newTodo );
        reset();

    };

    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />
                <button
                    className="btn btn-outline-primary mt-1 btn-block"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    );
};
