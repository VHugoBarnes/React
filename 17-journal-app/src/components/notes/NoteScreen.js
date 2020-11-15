import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="What happened today?"
                    className="notes__text-area"
                    autoComplete="off"
                >
                </textarea>
                <div className="notes__image">
                    <img 
                        src="https://c.files.bbci.co.uk/92F7/production/_101232673_angry.jpg"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    );
};
