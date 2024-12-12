import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import './DepartmentDashboardComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import AddRoleModal from './AddRoleModal';

const DepartmentDashboardComponent = () => {
    const initialData = [];
    const [departments, setDepartments] = useState(initialData);
    const [selectedDepartment, setSelectedDepartments] = useState(departments);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const saveDepartment = (newDepartment) =>{
        setDepartments([...departments, newDepartment]);
        fetch('http://localhost:8090/meta/department', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify(newDepartment)
        })
    }

    const columns = [
        { title: 'R.NO', field: 'id' },
        { title: 'Name', field: 'departmentName' },
        { title: 'Discription', field: 'description' },
    ];  



    useEffect(() => {
        fetch('http://localhost:8090/meta/department', {
            method: 'GET',
            headers: {
                "authorization": "Bearer " + localStorage.getItem('token')
            }
        })
            .then((response) => response.json())
            .then((data) => setDepartments(data));
    }, []);

    const handleRowClick = (e, row) => {
        console.log(`Row ${JSON.stringify(row.getData())} was clicked`);
        setSelectedDepartments(row.getData());
        openModal();
    };
    return (
        <div className="department-dashboard">
            <AddRoleModal
                isOpen={modalOpen}
                onClose={closeModal}
                onSave={save}
            />
            <div className="page-header">
                <h1>Department</h1>
                <button onClick={openModal}>Create New Department</button>
            </div>
            <div className="data-table-view">
                <ReactTabulator
                    columns={columns}
                    data={departments}
                    options={{}}
                    events={{ rowClick: handleRowClick }}

                />
            </div>
        </div>
    );
};
export default DepartmentDashboardComponent;