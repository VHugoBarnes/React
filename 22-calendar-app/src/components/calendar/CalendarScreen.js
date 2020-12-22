import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-esp';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment); // or globalizeLocalizer

// const myEventsList = [{
//     title: 'Cumpleaños de Keko',
//     start: moment().toDate(),    // new Date()
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     notes: 'Comprar el pastel',
//     user: {
//         _id: '123',
//         name: 'Víctor'
//     }
// }];

export const CalendarScreen = () => {

    // Redux
    // Para hacer dispatch de acciones
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { uid } = useSelector(state => state.auth);

    // Guardamos en el localStorage la última vista visitada, si no hay nada, usamos month
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => {
        dispatch( eventStartLoading() );
    }, [dispatch]);

    const onDoubleClick = (e) => {
        // Abrir modal
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        dispatch( eventClearActiveEvent() );
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {



        const style = {
            backgroundColor: (uid === event.user._id) ? '#367cf7' : '#465660',
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
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <CalendarModal />
            {
                (activeEvent) && <DeleteEventFab />
            }
            <AddNewFab />
        </div>
    )
}
