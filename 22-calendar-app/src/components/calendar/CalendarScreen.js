import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar';

const localizer = momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [{
    title: 'Cumpleaños de Keko',
    start: moment().toDate(),    // new Date()
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa'
}];

export const CalendarScreen = () => {
    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
            />  
        </div>
    )
}
