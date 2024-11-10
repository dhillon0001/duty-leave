// src/components/LeaveRequestsList.js
import React, { useState, useEffect } from 'react';
import { getLeaveRequests } from '../api';

const LeaveRequestsList = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const result = await getLeaveRequests();
        setLeaveRequests(result);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    };
    fetchLeaveRequests();
  }, []);

  return (
    <div>
      <h2>Leave Requests</h2>
      <ul>
        {leaveRequests.map((request) => (
          <li key={request._id}>
            <p>{request.eventName}</p>
            <p>{request.eventDate}</p>
            <p>{request.eventType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveRequestsList;
