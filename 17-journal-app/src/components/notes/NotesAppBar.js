import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {startSaveNote, startUploading} from '../../actions/notes';

export const NotesAppBar = () => {
    const {active} = useSelector(state => state.notes);
    const { date } = active;
    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    }

    const handleSubmit = () => {
        dispatch(startSaveNote(active));
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('MMMM Do YYYY')}</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{display: 'none'}}
                onChange={handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick={handlePictureClick}
                >
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
