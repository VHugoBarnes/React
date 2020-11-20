import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
    const {active} = useSelector(state => state.notes);
    const [values, handleInputChange, reset] = useForm(active);

    const dispatch = useDispatch();
    
    const { body, title, url } = values;

    const activeId = useRef(active.id);

    useEffect(() => {
        if(active.id !== activeId.current){
            reset(active);
            activeId.current = active.id;
        }
    }, [active, reset]);

    useEffect(() =>{
        dispatch(activeNote(values.id, {...values}));
    },[values,dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(active.id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                    name="title"
                />

                <textarea 
                    placeholder="What happened today?"
                    className="notes__text-area"
                    autoComplete="off"
                    value={ body }
                    onChange={ handleInputChange }
                    name="body"
                >
                </textarea>
                {
                    (url) &&
                    <div className="notes__image">
                    <img 
                        src={url}
                        alt="image1"
                    />
                    </div>
                }
            </div>
            <button 
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    );
};
