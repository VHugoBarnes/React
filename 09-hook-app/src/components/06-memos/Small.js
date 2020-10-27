import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Mo volví a mostrar :(');

    return (
        <small>
            { value }
        </small>
    );
})
