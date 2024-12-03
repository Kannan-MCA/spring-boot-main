import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import './StudentDashboardComponent.css';
import React, { useState } from 'react';
import AddStudentModal from './AddStudentModal';
const StudentDashboardComponent = () => {
    const [departments, setDepartments] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const saveDepartment = (newDepartment) => setDepartments([...departments, newDepartment]);

    const columns = [
        { title: 'R.NO', field: 'rno' },
        { title: 'Name', field: 'name' },
        { title: 'Department', field: 'department' },
    ];

    const data = [
        { rno: 1, name: 'Name-1', department: 'CSE' },
        { rno: 2, name: 'Name-2', department: 'IT' },
        { rno: 3, name: 'Name-3', department: 'ECE' },
    ];

    const handleRowClick = (e, row) => {
        console.log(`Row ${row.getData().questionId} was clicked`);
    };

    return (
        <div className="student-dashboard">
            <div className="student-page-header">
                <h1>Students</h1>
                <button onClick={openModal}>Create New Student</button>
            </div>

            <AddStudentModal
                isOpen={modalOpen}
                onClose={closeModal}
                onSave={saveDepartment}
            />

            <div className="data-table-view">
                <ReactTabulator
                    columns={columns}
                    data={data}
                    options={{}}
                    events={{ rowClick: handleRowClick }}
                />
            </div>

        </div>
    );
};
export default StudentDashboardComponent;