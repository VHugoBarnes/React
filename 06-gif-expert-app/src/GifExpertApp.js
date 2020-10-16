// Lección 69. GifExpertApp component
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // const categories = ['The Office', 'Minecraft', 'Clash of Clans'];
    const [categories, setCategories] = useState(['The Office', 'Minecraft', 'Clash of Clans']);

    // const handleAdd = () => {
    //     // setCategories( ['Little Witch Academia', ...categories] );
    //     setCategories( cats => ['Little Witch Academia', ...cats] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr></hr>

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
