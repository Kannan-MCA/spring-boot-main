import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { AuthProvider } from './context/AuthContext';
import Dshboard from './components/Dashboard';
import UplodeQustion from './components/UplodeQustions';
import Exam from './components/Exam';

import LoginComponent from './components/LoginComponent';
import Register from './components/RegisterComponent';
import PrivateRoutes from './PrivateRoute';
function App() {
  return (
    <AuthProvider>
      <div>

        <BrowserRouter>

          <HeaderComponent />

          <Routes>

            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/register" element={<Register />}></Route>

            

            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Dshboard />}></Route>
              <Route path="/qustion" element={<UplodeQustion />}></Route>
              <Route path="/exam" element={<Exam />}></Route>
            </Route>
          </Routes>

          <FooterComponent />
        </BrowserRouter>

      </div>
    </AuthProvider>
  );
}

export default App;