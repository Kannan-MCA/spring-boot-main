import React, { useState } from 'react';
import './ExamPage.css';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css'; 
import { ReactTabulator } from 'react-tabulator';
import AddExamModal from './AddExamModal';
const ExamComponent = () => {

  const [departments, setDepartments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openChallange =()=>{
  navigation.navigate('/editor');
  }
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
    <div className="exam-container">
      <div className="exam-page-header">
        <h1>Take Your Challange</h1>
        <button onClick={openModal}>Create New Exam</button>
        <button onClick={openChallange}>Code Challange</button>

        <AddExamModal
                isOpen={modalOpen}
                onClose={closeModal}
                onSave={saveDepartment}
            />

      </div>
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

export default ExamComponent;