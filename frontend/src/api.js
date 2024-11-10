import axios from 'axios';

const API_URL = 'http://localhost:5000/api/leaves';

export const requestLeave = async (leaveData) => {
  try {
    const token = localStorage.getItem('token');  // Get token from localStorage
    const response = await axios.post(`${API_URL}/request`, leaveData, {
      headers: {
        Authorization: `Bearer ${token}`,  // Add token to the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error requesting leave:', error);
    throw error;
  }
};
