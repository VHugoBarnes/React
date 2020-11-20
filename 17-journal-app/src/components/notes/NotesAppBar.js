import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {startSaveNote} from '../../actions/notes';

export const NotesAppBar = () => {
    const {active} = useSelector(state => state.notes);
    const { date } = active;
    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(startSaveNote(active));
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('MMMM Do YYYY')}</span>

            <div>
                <button className="btn">
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
