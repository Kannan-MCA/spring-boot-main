import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import './dashboard.css';
const Dashboard = () => {
    const columns = [
        { title: 'Si.No', field: 'rno' },
        { title: 'Title', field: 'name' },
        { title: 'Assigned', field: 'department' },
        { title: 'Attended', field: 'department' },
    ];

    const data = [
        { rno: 1, name: 'Name-1', department: 'CSE' },
        { rno: 2, name: 'Name-2', department: 'IT' },
        { rno: 3, name: 'Name-3', department: 'ECE' },
        { rno: 4, name: 'Name-3', department: 'ECE' },
        { rno: 5, name: 'Name-3', department: 'ECE' },


    ];

    const handleRowClick = (e, row) => {
        console.log(`Row ${row.getData().questionId} was clicked`);
    };

    return (
        <div className="student-dashboard">
            <div className="dashboard-header">
                <div className="text-ovrlay-backdrop">
                    <h3>Department</h3> <h4>Of</h4> <h1>Technical Training </h1>
                    <h6>The Real Phase Of Education</h6>
                </div>
                <div className='card-Row'>
                <div className='Score-Board'>
                <div className='card-header'> Today`s Exam</div>
                <div className='exam-detail'>
                <ReactTabulator
                    columns={columns}
                    data={data}
                    options={{}}
                    events={{ rowClick: handleRowClick }}
                />
                </div>
                </div>
                <div className='Score-Board'>
                    <div className='card-header'> </div>
                </div>


            </div>
            </div>
            
        </div>
    );
};
export default Dashboard;