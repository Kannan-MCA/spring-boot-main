import React, { useState } from 'react';
import "./UploadQuestions.css";
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import UploadQustionsModal from './UploadQustionsModal';
import { BASE_URL } from '../../util/util';

const UploadQuestions = () => {

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




  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch(BASE_URL + '/api/upload-questions', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Questions uploaded successfully.');
    } else {
      alert('Failed to upload questions.');
    }
  };

  return (
    <div className="upload-questions">
      <div className="qustion-page-header">
        <h1>Upload Questions</h1>
        <button onClick={openModal}>Upload Qustions</button>
        <UploadQustionsModal
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

export default UploadQuestions;
