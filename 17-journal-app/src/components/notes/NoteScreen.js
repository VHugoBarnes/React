import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    const {active:activeNote} = useSelector(state => state.notes);
    const [values, handleInputChange, reset] = useForm(activeNote);
    
    const { body, title, url } = values;

    const activeId = useRef(activeNote.id);

    useEffect(() => {
        if(activeNote.id !== activeId.current){
            reset(activeNote);
            activeId.current = activeNote.id;
        }
    }, [activeNote, reset]);

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
                />

                <textarea 
                    placeholder="What happened today?"
                    className="notes__text-area"
                    autoComplete="off"
                    value={ body }
                    onChange={ handleInputChange }
                >
                </textarea>
                {
                    (url) &&
                    <div className="notes__image">
                    <img 
                        src="https://c.files.bbci.co.uk/92F7/production/_101232673_angry.jpg"
                        alt="image1"
                    />
                    </div>
                }
            </div>
        </div>
    );
};
