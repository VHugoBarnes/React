export const fileUpload = async(file) => {
    
    // Url para subir imágenes
    const clouldUrl = 'https://api.cloudinary.com/v1_1/dcswawnum/upload';

    // FormData
    // Provides a way to easily construct a set of 
    // key/value pairs representing form fields and 
    // their values, which can then be easily sent using 
    // the XMLHttpRequest.send() method. It uses the same
    // format a form would use if the encoding type 
    // were set to "multipart/form-data".
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    // Intenta realizar la petición POST
    try {
        const resp = await fetch(clouldUrl, {
            method: 'POST',
            body: formData
        });
        
        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }

    // return url de la imagen
}