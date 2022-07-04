import React, { useState, useEffect } from 'react';
import {DayPilotNavigator, DayPilotCalendar} from "@daypilot/daypilot-lite-react";
import Modal from './Modal';
import db from '../utils/request';
import { HOUR } from '../utils/time'

const Calendar = ({ canEdit }) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [delivery, setDelivery] = useState(null);
  const openPopUp = (event) => {
    setDelivery(events.find(x => x.id === event.e.data.id));
  }
  useEffect(() => {
    db.get('delivery').then(x => setEvents(x.data));
  }, []);
  return (
    <div>
      {delivery !== null && <Modal delivery={delivery} setDelivery={setDelivery} canEdit={canEdit} events={events} setEvents={setEvents}/>}
      <DayPilotNavigator selectMode='week'
          onTimeRangeSelected={ args => setDate(args.day)}
        />
      <DayPilotCalendar viewType="Week" startDate={date} headerDateFormat="M/dd"
        events={events.map(event => {
          return ({
            ...event,
            text: `${event.company}: ${event.description}`,
            start: new Date(event.start - 4*HOUR),
            end: new Date(event.end - 4*HOUR),
          });
        })}
        onEventClick={(event) => openPopUp(event)} eventMoveHandling='Disabled'/>
    </div>
  );
};

export default Calendar;