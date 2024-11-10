// src/components/LeaveRequest.js
import React, { useState } from 'react';
import { requestLeave } from '../api';

const LeaveRequest = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const leaveData = {
      eventName,
      eventDate,
      eventType,
    };

    try {
      const result = await requestLeave(leaveData);
      console.log('Leave request created successfully:', result);
      // Optionally clear form
      setEventName('');
      setEventDate('');
      setEventType('');
    } catch (error) {
      console.error('Error creating leave request:', error);
      setError('Failed to submit leave request. Please try again.');
    }
  };

  return (
    <div>
      <h2>Request Leave</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </label>
        <label>
          Event Date:
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </label>
        <label>
          Event Type:
          <input
            type="text"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default LeaveRequest;
