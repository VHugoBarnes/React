import React from 'react'

export const GifGrid = ({category}) => {

    const getGif = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=the+office&limit=6&api_key=69P2JB6qo3viyWDvHpnvtSyvEGFzNfzb';
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        } );

        console.log(gifs);

    }

    getGif();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
