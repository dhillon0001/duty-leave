// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeaveForm from './components/LeaveForm';
import ParticipationRecord from './components/ParticipationRecord';
import AdminDashboard from './components/AdminDashboard';

const App = () => (
  <Router>
    <Routes>
    
      <Route path="/" element={<LeaveForm />} />  {/* Set LeaveForm as the default page */}
      <Route path="/records" element={<ParticipationRecord />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
    <>
    <h1>Duty Leave application
      
    </h1>
    </>
  </Router>
);

export default App;
