import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

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
        const doc = await db.collection(`${uid}/journal/notes`).add( newNote );
        dispatch( activeNote(doc.id, newNote) );
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch(setNotes(notes));
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
    }
}
