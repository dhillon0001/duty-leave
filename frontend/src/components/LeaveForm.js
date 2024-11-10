// src/components/LeaveForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LeaveForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/leaves/request`, {
        eventName,
        eventDate,
        eventType,
      });
      alert('Leave request submitted');
    } catch (error) {
      alert('Failed to submit leave request');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
      <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
      <select value={eventType} onChange={(e) => setEventType(e.target.value)} required>
        <option value="">Select Event Type</option>
        <option value="technical">Technical</option>
        <option value="co-curricular">Co-curricular</option>
        <option value="sports">Sports</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeaveForm;
