import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import UploadQuestions from './components/UploadQuestions';
import Exam from './components/Exam';
import StudentDashboardComponent from './components/student/StudentDashboardComponent';
import StaffDashboardComponent from './components/staff/StaffDashboardComponent';
import DepartmentDashboardComponent from './components/department/DepartmentDashboardComponent';

import LoginComponent from './components/LoginComponent';
import Register from './components/RegisterComponent';
import PrivateRoutes from './PrivateRoute';
function App() {
  return (
    <AuthProvider value={{}}>
      <div className="app">
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/students" element={<StudentDashboardComponent />} />
            <Route path="/employee" element={<StaffDashboardComponent />} />
            <Route path="/departments" element={<DepartmentDashboardComponent />} />
            <Route path='/UplodeQuestions' element={<UploadQuestions/>} />


            <Route path="/exam" element={<Exam />} />

            {/* 
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/upload-question" element={<UplodeQustion />} />
              <Route path="/exam" element={<Exam />} />
            </Route> */}

          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;