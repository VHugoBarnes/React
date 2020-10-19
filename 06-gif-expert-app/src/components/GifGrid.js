import React from 'react'
import { getGif } from '../helpers/getGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const { loading } = useFetchGifs();

    // useEffect( () => {
    //     getGif(category).then( setImages );
    // }, [category] );

    

    return (
        <>
        <h3>{ category }</h3>
        { loading ? 'Cargando...' : 'Fin de la carga' }
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
