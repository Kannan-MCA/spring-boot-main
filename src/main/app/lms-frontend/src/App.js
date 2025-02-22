import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/dashboard/Dashboard';
import UploadQuestions from './components/qustion/UploadQuestions';
import ExamComponent from './components/exam/ExamComponent';
import StudentDashboardComponent from './components/student/StudentDashboardComponent';
import StaffDashboardComponent from './components/staff/StaffDashboardComponent';
import DepartmentDashboardComponent from './components/department/DepartmentDashboardComponent';
import CodeEditor from './components/editor/editor';
import StudentPage from './components/StudentDashboard/StudentPage';
import LoginComponent from './components/LoginComponent';
import Register from './components/RegisterComponent';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HeaderComponent />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<StudentPage />} path="/home" exact />
            <Route element={<StudentPage />} path="/StudentPage" />

          </Route>
          <Route element={<LoginComponent />} path="/login" />
          <Route element={<CodeEditor />} path="/editor" />


          {/* 
          
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentDashboardComponent />} />
          <Route path="/employees" element={<StaffDashboardComponent />} />
          <Route path="/departments" element={<DepartmentDashboardComponent />} />
          <Route path="/uploadquestions" element={<UploadQuestions />} />
          <Route path="/exam" element={<ExamComponent />} />
          <Route path="/editor" element={<CodeEditor />} />
          <Route path="/StudentPage" element={<StudentPage />} />" 
          
          */}

        </Routes>


        <FooterComponent />

      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;