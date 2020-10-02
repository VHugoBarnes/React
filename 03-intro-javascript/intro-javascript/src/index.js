// Lección 23. Fetch API

const apiKey = '69P2JB6qo3viyWDvHpnvtSyvEGFzNfzb';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)
    })
    .catch(console.warn);
