import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import UplodeQustion from './components/UplodeQustions';
import Exam from './components/Exam';

import LoginComponent from './components/LoginComponent';
import Register from './components/RegisterComponent';
import PrivateRoutes from './PrivateRoute';
function App() {
  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/register" element={<Register />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/upload-question" element={<UplodeQustion />} />
              <Route path="/exam" element={<Exam />} />
            </Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;