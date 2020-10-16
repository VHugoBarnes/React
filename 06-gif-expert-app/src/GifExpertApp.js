// Lección 69. GifExpertApp component
import React, {useState} from 'react';

export const GifExpertApp = () => {

    // const categories = ['The Office', 'Minecraft', 'Clash of Clans'];
    const [categories, setCategories] = useState(['The Office', 'Minecraft', 'Clash of Clans']);

    const handleAdd = () => {
        // setCategories( ['Little Witch Academia', ...categories] );
        setCategories( cats => ['Little Witch Academia', ...cats] );
    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map( category =>{
                    return <li key={category}>{category}</li>
                    } )
                }
            </ol>
        </>
    );

};
