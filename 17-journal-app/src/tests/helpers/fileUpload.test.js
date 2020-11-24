import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

// Configuración de nuestra cuenta
cloudinary.config({ 
    cloud_name: 'dcswawnum', 
    api_key: '451823518514662', 
    api_secret: 'G4ULFAeMm06Eol5gJWtPSbq32NI' 
});

describe('Pruebas en fileUpload', () => {

    jest.setTimeout(30000);
   
    //              done hace que se espere hasta que se llame v
    test('debe de cargar un archivo y retornar el URL', async() => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        // Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.png','');

        await cloudinary.v2.api.delete_resources( imageId, {}, ()=> {console.log('');});
        
    });

    test('Debe de retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);
        
        expect(url).toBe(null);
    });
    
});
