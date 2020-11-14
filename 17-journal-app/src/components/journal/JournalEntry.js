import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/000/246/312/small_2x/mountain-lake-sunset-landscape-first-person-view.jpg)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un hermoso paísaje</p>
                <p className="journal__entry-content">
                    Tempor amet incididunt enim nostrud voluptate pariatur et elit aliquip excepteur.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
