import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './CalendarToolbar';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import isSameMonth from 'date-fns/isSameMonth';
import isSameDay from "date-fns/isSameDay"

const locales = {
    'en-US': enUS,
};
  
const localizer = momentLocalizer(moment);



const CalendarView = () => {
    const events = [
        {
            title: 'CSC 436',
            start: moment().toDate(),
            end: moment().add(1, 'hours').toDate(),
            class: "CSC 436"
        }
    ];

    const views = ['day', 'week', 'month', 'agenda'];
    const [view, setView] = useState('week');
    const [currentDate, setCurrentDate] = useState(new Date());
    const onView = (view) => setView(view);
    const onNavigate = (date) => setCurrentDate(date);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

    const dayPropGetter = (date) => {
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const isNextMonth = !isSameMonth(date, currentDate);
        const isToday = isSameDay(date, new Date());
      
        let className = '';
        if (isToday) className += 'today ';
        if (isWeekend && isNextMonth) className += 'next-month-weekend ';
        else if (isWeekend) className += 'weekend ';
        else if (isNextMonth) className += 'next-month-weekday ';
        else className += 'weekday ';
      
        return { className: className.trim() };
    };

    const handleEventSelect = (event, e) => {
        const { clientX, clientY } = e;
        setPopupPosition({ x: clientX, y: clientY });

        if (selectedEvent && Object.keys(event).every(key => selectedEvent[key] === event[key])) {
            setSelectedEvent(null);
        } else {
            setSelectedEvent(event);
        }
    };

    function stringToColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = 'rgba(';
        for (let i = 0; i < 3; i++) {
          const value = (hash >> (i * 8)) & 0xFF;
          color += value + ', ';
        }
        color += '0.4)';
        return color;
      }
      
      
    function eventStyleGetter(event, start, end, isSelected) {
        let backgroundColor = stringToColor(event.class);
        let style = {
          backgroundColor: backgroundColor,
          borderRadius: '0px',
          opacity: 0.8,
          color: '#white',
          fontWeight: '700',
          border: '0px',
          display: 'block',
          borderRadius: '6px',
        };
        return {
          style: style
        };
    }

    return (
        <div className="" style={{ overflowY: 'auto' }}>
            <Calendar
                 localizer={localizer}
                 events={events}
                 eventPropGetter={eventStyleGetter}
                 startAccessor="start"
                 endAccessor="end"
                 style={{ height: '80vh', width: '100%' }}
                 view={view}
                 views={views}
                 onView={onView}
                 onNavigate={onNavigate}
                 dayPropGetter={dayPropGetter}
                 onSelectEvent={handleEventSelect}
                 selectable
                 components={{
                     toolbar: CalendarToolbar,
                 }}
                 scrollToTime={new Date(new Date().setHours(new Date().getHours(), 0, 0, 0))}
            />
        </div>
    );
};

export default CalendarView;
