import React from "react";
import './calendar.css';
import { Navigate } from 'react-big-calendar';
import moment from 'moment';

const CalendarToolbar = (props) => {
    const { label, date, onNavigate, onView, view } = props;

    const goToBack = () => {
        if (view === "month" || view === "day" || view === "week" || view === "agenda") {
            onNavigate(Navigate.PREVIOUS);
        } else {
            let mDate = moment(date);
            let newDate = mDate.subtract(1, view).toDate();
            onNavigate(newDate);
        }
    };
  
    const goToNext = () => {
        if (view === "month" || view === "day" || view === "week" || view === "agenda") {
            onNavigate(Navigate.NEXT);
        } else {
            let mDate = moment(date);
            let newDate = mDate.add(1, view).toDate();
            onNavigate(newDate);
        }
    };
  
    const goToCurrent = () => {
      onNavigate(Navigate.TODAY);
    };
  
    const splitLabel = () => {
      const parts = label.split(' ');
      if (view === "month" || view === "week") {
        return { month: moment(date).format('MMMM'), year: moment(date).format('YYYY') };
      } else if (parts.length === 2) {
        return { month: parts[0], year: parts[1] };
      }
      return { month: label, year: '' };
    };
  
    const { month, year } = splitLabel();

    return (
        <div className="rbc-toolbar">
          <span className="rbc-btn-group">
            <button type="button" onClick={goToBack}>{"<"}</button>
            <button type="button" onClick={goToCurrent}>Today</button>
            <button type="button" onClick={goToNext}>{">"}</button>
          </span>
          <span className="rbc-toolbar-label text-white">
            <span style={{ fontSize: '42px', fontWeight: '900' }}>{month} </span>
            <span style={{ fontSize: '42px', fontWeight: '100' }}>{year}</span>
          </span>
          <span className="rbc-btn-group">
            {props.views.map(viewName => (
              <button
                key={viewName}
                type="button"
                onClick={() => onView(viewName)}
                className={view === viewName ? 'rbc-active' : ''}
              >
                {viewName}
              </button>
            ))}
          </span>
        </div>
      );

};

export default CalendarToolbar;
