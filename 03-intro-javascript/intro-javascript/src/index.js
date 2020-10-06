// Lección 24. Async - Await

// Primero creamos una promesa común y corriente
// const getImagenPromesa = () => new Promise( resolve => resolve('udemy.com') );
// getImagenPromesa().then(console.log);

// Creándolo con Async
const getImage = async() => {
    try {
        const apiKey = '69P2JB6qo3viyWDvHpnvtSyvEGFzNfzb';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        console.log( data );
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    }catch(error){
        // Manejo del error
        console.error(error);
    }
}

getImage().then();
