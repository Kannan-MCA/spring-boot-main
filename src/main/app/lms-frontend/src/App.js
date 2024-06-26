import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookComponent from './components/ListBookComponent';
import EmployeeComponent from './components/EmployeeComponent';

import LoginComponent from './components/LoginComponent';
import Register from './components/RegisterComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route path = "/" element = { <LoginComponent /> }></Route>
              <Route path = "/register" element = { <Register /> }></Route>
              <Route path = "/home" element = { <ListBookComponent /> }></Route>
              <Route path = "/add-employee" element = { <EmployeeComponent />} ></Route>
              <Route path = "/edit-employee/:id" element = { <EmployeeComponent />}></Route>
            </Routes>
        </div>
        <FooterComponent />
        </BrowserRouter>
    </div>
  );
}

export default App;