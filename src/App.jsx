import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DepartmentList from './Departments.jsx';
import Courses from './Courses.jsx';
import Students from './Students.jsx';
import LoginComponent from './LoginComponent.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <button><Link to="/departments">Departments</Link></button>
        <button><Link to="/courses">Courses</Link></button>
        <button><Link to="/students">Students</Link></button>
        <button><Link to="/login">Login</Link></button>
      </div>
      <Routes>
        <Route path="/departments" element={<DepartmentList />} />
        
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/" element={<DepartmentList />} />
      </Routes>
    </Router>
  );
};

export default App;