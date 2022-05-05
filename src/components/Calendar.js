import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {DayPilotNavigator, DayPilotCalendar} from "@daypilot/daypilot-lite-react";
import Modal from './Modal';
import db from '../utils/request';

//START PARAMETER MUST CHSNGE FROM 'event.date' to 'event.start'
//WILL CAUSE PROBLEMS IF UNNOTICED

const Calendar = ({ canEdit }) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [delivery, setDelivery] = useState(null);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const openPopUp = (event) => {
    const id = event.e.data.id;
    setPopUpOpen(true);
    setDelivery(events.find(x => x.id === id));
  }
  useEffect(() => {
    db.get().then(x => setEvents(x.data));
  }, []);
  return (
    <div>
      <Modal delivery={delivery} open={popUpOpen} setOpen={setPopUpOpen} canEdit={canEdit}/>
      <DayPilotNavigator selectMode='week'
          onTimeRangeSelected={ args => setDate(args.day)}
        />
      <DayPilotCalendar viewType="Week" startDate={date} 
        events={events.map(event => {
            return ({
              ...event,
              text: `${event.company}: ${event.description}`,
            });
          })}
        onEventClick={(event) => openPopUp(event)} eventMoveHandling='Disabled'/>
    </div>
  );
};

export default Calendar;