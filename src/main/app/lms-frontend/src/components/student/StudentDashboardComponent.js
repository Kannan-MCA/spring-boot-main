import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import './StudentDashboardComponent.css';
const StudentDashboardComponent = () => {
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
            <div className="page-header">
                <h1>Students</h1>

            </div>

        </div>
    );
};
export default StudentDashboardComponent;