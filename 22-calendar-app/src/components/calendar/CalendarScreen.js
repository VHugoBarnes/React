import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-esp';

moment.locale('es');
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [{
    title: 'Cumpleaños de Keko',
    start: moment().toDate(),    // new Date()
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
}];

export const CalendarScreen = () => {

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        console.log(event, start, end, isSelected);
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={ eventStyleGetter }
            />  
        </div>
    )
}
