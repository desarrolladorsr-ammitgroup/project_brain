import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set up the localizer with Moment.js
const localizer = momentLocalizer(moment);

const C = () => {
  // Example events array
  const [events, setEvents] = useState([
    {
      title: 'Meeting with Team',
      start: new Date(2025, 0, 10, 10, 0), // January 10, 2025, 10:00 AM
      end: new Date(2025, 0, 10, 11, 0),   // January 10, 2025, 11:00 AM
    },
    {
      title: 'Lunch with Client',
      start: new Date(2025, 0, 11, 13, 0),
      end: new Date(2025, 0, 11, 14, 0),
    },
  ]);

  return (
    <div style={{ height: '80vh'}}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
        defaultView="month"
      />
      
    </div>
  );
};

export default C;
