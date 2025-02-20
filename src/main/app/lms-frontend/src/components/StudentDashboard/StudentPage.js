import React, { useState } from 'react';
import './StudentPage.css';



const StudentPage = () => (
    <div className="student-page">
        <div className="card-row">
            <div className="col-md-3 card-container">
                <div className="card">
                <div className='card-header'>
                <h5 className="card-title">Exams</h5>
                </div>
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
            <div className="col-md-3 card-container">
                <div className="card">
                    <div className='card-header'>
                        <h5 className="card-title">Attendance</h5>

                    </div>
                    <div className="card-body">
                    </div>
                </div>
            </div>
            <div className="col-md-3 card-container">
                <div className="card">
                    <div className='card-header'>
                        <h5 className="card-title">Performance</h5>
                    </div>
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="col-md-3 card-container">
                <div className="card">
                    <div className='card-header'>

                        <h5 className="card-title">Challenges</h5>
                    </div>



                    <div className="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default StudentPage;