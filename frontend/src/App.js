import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import OptionsPage from './components/OptionsPage';
import AlumniForm from './components/AlumniForm';
import StudentForm from './components/StudentForm';
import CollegeLogin from './components/CollegeLogin';
import Home from './components/Home';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/options" element={<OptionsPage />} />
          <Route path="/student-form" element={<StudentForm />} />
          <Route path="/alumni-form" element={<AlumniForm />} />
          <Route path="/college-login" element={<CollegeLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;