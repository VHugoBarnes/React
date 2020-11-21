import React from 'react';
import { useSelector } from 'react-redux';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {

    const notes = useSelector(state => state.notes);
    const {active} = notes; // Por defecto es null

    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
            <Sidebar />

            <main>
                {/* <NothingSelected/> */}
                {
                    (active)
                        ? (<NoteScreen/>)
                        : (<NothingSelected/>)
                }
            </main>
        </div>
    );
};
