import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    // Cada que se introduce una letra se escribe en la caja de texto del input
    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleSubmit = ( e ) => {
        e.preventDefault(); // previene que se cargue toda la página
        // console.log('Submit hecho');
        if(inputValue.trim().length >= 1){
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    };
    
    return (
        <form onSubmit={ handleSubmit } >
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder='Buscar...'
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
