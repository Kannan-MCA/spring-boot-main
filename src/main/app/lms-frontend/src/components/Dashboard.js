import React from 'react'
import './../Style/dashboard.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
const Dshboard = () => {
  const [value, onChange] = useState(new Date());

  return (

    <div className='container'>
      <div className='top-row'>
        <div className="card-container">
        </div>
        <div className='calendar-view'> <Calendar value={value} onChange={onChange} /></div>

      </div>

    </div>

  )
}
export default Dshboard