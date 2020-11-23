import { fileUpload } from '../../helpers/fileUpload';

describe('Pruebas en fileUpload', () => {

    jest.setTimeout(20000);
   
    test('Debe de cargar un archivo y retornar un URL', async() => {
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        // Blob para almacenar la imagen
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);
        
        expect(typeof url).toBe('string');
    });

    test('Debe de retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);
        
        expect(url).toBe(null);
    });
    
});
