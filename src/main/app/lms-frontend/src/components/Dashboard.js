import React from 'react'
import './../Style/dashboard.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Card from './Card';
import cardimage from './../image/logo.png';

const Dshboard = () => {
  const [value, onChange] = useState(new Date());

  return (

    <div className='container'>
      <div className='top-row'>

        <div className="card-container">
          <Card image={cardimage} title={"MySql"} content={"Mycontent"} />
        </div>
        <div className='calendar-view'> <Calendar value={value} onChange={onChange} /></div>

      </div>


    </div>

  )
}
export default Dshboard