import React from 'react'
import './../Style/dashboard.css';
import Calendar from 'react-calendar';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
const Dshboard = () => {
  const [value, onChange] = useState(new Date());
  function RenderDate(props) {
    const { hasFocus, value } = props;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);
    React.useLayoutEffect(() => {
      if (hasFocus) {
        //const input = buttonElement.current.querySelector('input');
        //input?.focus();
      } else if (rippleRef.current) {
        rippleRef.current.stop({});
      }
    }, [hasFocus]);
    return (
      <div style={{width:"50px"}}>
        {value ?? ''}
        
      </div>
    );
  }
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      renderCell: RenderDate,
    },
    {
      field: 'subject',
      headerName: 'Subject',
      width: 100,
      renderCell: RenderDate,
    },{
      field: 'duriation',
      headerName: 'Duriation(In Min)',
      width: 150,
      renderCell: RenderDate,
    },{
      field: 'totalnumberofQustions',
      headerName: 'TotalQustions',
      width: 100,
      renderCell: RenderDate,
    },
    {
      field: 'passPercentage',
      headerName: 'Pass %',
      width: 200,
      renderCell: RenderDate,
    },
  ];

  const rows = [
    {
      id: 1,
      title:"Java MCQ",
      subject:"Java",
      duriation:30,
      passPercentage:30,
      totalnumberofQustions:10,
      qustionSet:[{}]
    },
    {
      id: 2,
      title:"SpringBoot MCQ",
     subject:"Java",
     duriation:30,
     passPercentage:50,
     totalnumberofQustions:10,
     qustionSet:[{}]
    },
    {
      id: 3,
      title:"React MCQ",
      subject:"Java",
      duriation:30,
      passPercentage:10,
      totalnumberofQustions:10,
      qustionSet:[{}]
    },
  ];


  return (
    <div className='parent-container'>
      <div className='data-table-view'>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
      <div>
        <div className='calendar-view'> <Calendar value={value} onChange={onChange} /></div>
      </div>

    </div>
  )
}
export default Dshboard