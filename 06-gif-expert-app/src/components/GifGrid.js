import React from 'react'
import { getGif } from '../helpers/getGif';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGif(category).then( setImages );
    // }, [category] );

    

    return (
        <>
        <h3>{ category }</h3>
        {/* <div className="card-grid">
                {
                    images.map( (i) => 
                    (<GifGridItem 
                        key={i.id}
                        {...i}/>
                    )
                    )
                }
        </div> */}
        </>
    )
}
