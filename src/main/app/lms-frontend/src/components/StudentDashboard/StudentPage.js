import React, { useState } from 'react';
import './StudentPage.css';
import { IconButton } from '@mui/material';
import { ReactTabulator } from 'react-tabulator';




const StudentPage = () => {
    const columns = [
        { title: 'R.NO', field: 'rno' },
        { title: 'Name', field: 'name' },
        { title: 'Department', field: 'department' }
    ];

    const data = [
        { rno: 1, name: 'Name-1', department: 'CSE' },
        { rno: 2, name: 'Name-2', department: 'IT' },
        { rno: 3, name: 'Name-3', department: 'ECE' },
        { rno: 4, name: 'Name-1', department: 'CSE' },
        { rno: 5, name: 'Name-2', department: 'IT' },
        { rno: 6, name: 'Name-3', department: 'ECE' },
        { rno: 7, name: 'Name-3', department: 'ECE' },
        { rno: 8, name: 'Name-1', department: 'CSE' },
        { rno: 9, name: 'Name-2', department: 'IT' },
        { rno: 10, name: 'Name-3', department: 'ECE' },
    ];

    const handleRowClick = (e, row) => {
        console.log(`Row ${row.getData().questionId} was clicked`);
    };


    return (
        <div className="student-page">
            <div className='card-row'>
                <div className='col-md-4 card'>
                    <div className='header'>
                        <h6>Open Challanges</h6>
                        <button>View Details</button>
                    </div>


                </div>
                <div className='col-md-4 card'>
                    <div className='header'>
                        <h6>Entitled Lectures</h6>
                        <button>View Details</button>
                    </div>


                </div>


                <div className='col-md-4 card'>
                    <div className='header'>
                        <h6>Entitled Assessments</h6>
                        <button>View Details </button>
                    </div>


                </div>

            </div>



            <div className='card-row-3' >
                <div className='col-md-2 card'>
                    <div className='header'>
                        <h6>Completed Challanges</h6>
                        <button> Details</button>
                    </div>
                </div>
                <div className='col-md-2 card'>
                    <div className='header'>
                        <h6>Completed Lectures</h6>
                        <button> Details</button>
                    </div>
                </div>
                <div className='col-md-2 card'>
                    <div className='header'>
                        <h6>Completed Assessments</h6>
                        <button> Details</button>
                    </div>
                </div>
                <div className='col-md-2 card'>
                    <div className='header'>
                        <h6>Upcoming Challanges</h6>
                        <button> Details</button>
                    </div>
                </div>
                <div className='col-md-2 card'>
                    <div className='header'>
                        <h6>Upcoming Lectures</h6>
                        <button> Details</button>
                    </div>
                </div>
                <div className='col-md-2 card'>
                    <div className='header'>
                        <h6>Upcoming Assessments</h6>
                        <button> Details</button>
                    </div>
                </div>
            </div>

            <div className='card-row-3 data-table' >
                <div className="col-md-3">
                    <ReactTabulator
                        columns={columns}
                        data={data}
                        options={{}}
                        events={{ rowClick: handleRowClick }}
                    />
                </div>
                <div className="col-md-9 details-page">
                    <div className="col-md-6">
                        <div className='header-title'>
                        Detail
                        </div>
                        
                        
                        </div>
                    <div className="col-md-6"> 
                    <div className='header-title'>
                    Detail
                    </div>

                    </div>
                </div>

            </div>



        </div>
    )
};
export default StudentPage;