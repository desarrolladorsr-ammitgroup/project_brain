import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import C from '../components/C';

function CalendarScreen(){
    return(
        <div style={{ display: 'flex', flexDirection: 'row',width:'100%',height:'100vh',gap:'20%'}}>
        <Sidebar/>
        <C/>
    
    </div>
    )
   
    }
  

export default CalendarScreen;