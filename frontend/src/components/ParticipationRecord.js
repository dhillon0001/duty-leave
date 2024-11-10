// src/components/ParticipationRecord.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParticipationRecord = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/leaves/records`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRecords(response.data);
      } catch (error) {
        alert('Failed to fetch records');
      }
    };
    fetchRecords();
  }, []);

  return (
    <div>
      <h2>Your Participation Records</h2>
      <ul>
        {records.map((record) => (
          <li key={record._id}>
            {record.eventName} - {record.eventDate} - {record.eventType} - {record.certificateUploaded ? 'Certificate Uploaded' : 'Upload Certificate'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipationRecord;
