// backend/routes/leaveRoutes.js
const express = require('express');
const router = express.Router();
const Leave = require('../models/Leave');

// Create leave request
router.post('/request', async (req, res) => {
  try {
    const { eventName, eventDate, eventType } = req.body;

    const newLeaveRequest = new Leave({
      eventName,
      eventDate,
      eventType,
    });

    const savedLeaveRequest = await newLeaveRequest.save();
    res.status(201).json(savedLeaveRequest);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create leave request' });
  }
});

module.exports = router;
