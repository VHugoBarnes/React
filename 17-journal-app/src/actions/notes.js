import Swal from 'sweetalert2';
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { fileUpload } from '../helpers/fileUpload';

// Preset name for cloudinary: react-journal

export const startNewNote = () => {

    // Con el getState podemos acceder al estado actual de los reducers
    return async(dispatch, getState) => {
        // Sacamos del store el reducer auth y su valor uid.
        const { uid } = getState().auth;
        // Creamos el objeto
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        // Llamamos a un path en firestore para guardar la información en una colección
        // Debe de estar autenticado para realizar la acción
        const doc = await db.collection(`${uid}/journal/notes`).add( newNote );
        dispatch( activeNote(doc.id, newNote) );

        dispatch(addNewNote(doc.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async( dispatch ) => {
        console.log('a');
        const notes = await loadNotes( uid );
        console.log('b');
        dispatch(setNotes(notes));
        console.log('c');
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
})

export const startSaveNote = ( note ) => {
    return async(dispatch, getState) => {
        // Sacamos del store el reducer auth y su valor uid.
        const { uid } = getState().auth;

        if(!note.url) {
            delete note.url;
        }

        // Extraemos la nota (una copia) a una variable
        const noteToFirestore = {...note};
        // Se elimina el id porque no se puee actualizar
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire('Saved', note.title, 'success');
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdate,
    payload: {
        id, 
        note: {id, ...note}
    }
})

export const startUploading = (file) => {
    return async(dispatch, getState) => {
        const {active: activeNote} = getState().notes;
       
        Swal.fire({
            title:'Uploading Image...', 
            text: 'Please wait', 
            allowOutsideClick: false, 
            willOpen: () => {Swal.showLoading()},
            showConfirmButton: false
        });

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote))
        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid;
        // Borramos el registro
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id,
})

export const noteLogout = () => ({
    type: types.notesLogoutCleaning,
})
