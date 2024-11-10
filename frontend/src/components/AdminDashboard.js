// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/leaves/records`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLeaveRequests(response.data);
      } catch (error) {
        alert('Failed to fetch leave requests');
      }
    };
    fetchLeaveRequests();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {leaveRequests.map((request) => (
          <li key={request._id}>
            {request.eventName} - {request.eventDate} - {request.eventType} - {request.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
