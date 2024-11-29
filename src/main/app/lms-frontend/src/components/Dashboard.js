import React from 'react'
import './../Style/dashboard.css';
import Calendar from 'react-calendar';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateCellRenderer = (props) => {
    const { hasFocus, value } = props;
    const buttonElementRef = React.useRef(null);
    const rippleRef = React.useRef(null);
   
    return (
      <div style={{ width: '50px' }}>
        {value ?? ''}
      </div>
    );
  };
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      renderCell: dateCellRenderer,
    },
    {
      field: 'subject',
      headerName: 'Subject',
      width: 100,
      renderCell: dateCellRenderer,
    },
    {
      field: 'duration',
      headerName: 'Duration (In Min)',
      width: 150,
      renderCell: dateCellRenderer,
    },
    {
      field: 'totalQuestions',
      headerName: 'Total Questions',
      width: 100,
      renderCell: dateCellRenderer,
    },
    {
      field: 'passPercentage',
      headerName: 'Pass %',
      width: 200,
      renderCell: dateCellRenderer,
    },
  ];

  const rows = [
    {
      id: 1,
      title: 'Java MCQ',
      subject: 'Java',
      duration: 30,
      passPercentage: 30,
      totalQuestions: 10,
      questionSet: [{}],
    },
    {
      id: 2,
      title: 'SpringBoot MCQ',
      subject: 'Java',
      duration: 30,
      passPercentage: 50,
      totalQuestions: 10,
      questionSet: [{}],
    },
    {
      id: 3,
      title: 'React MCQ',
      subject: 'Java',
      duration: 30,
      passPercentage: 10,
      totalQuestions: 10,
      questionSet: [{}],
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
        <div className='calendar-view'>
          <Calendar value={selectedDate} onChange={setSelectedDate} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard