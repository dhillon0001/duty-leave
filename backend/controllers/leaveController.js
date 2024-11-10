// backend/controllers/leaveController.js
const Leave = require('../models/Leave');

exports.requestLeave = async (req, res) => {
  const { eventName, eventDate, eventType } = req.body;
  const studentId = req.user.userId;

  const newLeave = new Leave({ eventName, eventDate, eventType, studentId });
  await newLeave.save();

  res.status(201).json(newLeave);
};

exports.getLeaveRequests = async (req, res) => {
  const leaves = await Leave.find().populate('studentId', 'username');
  res.json(leaves);
};

exports.getParticipationRecords = async (req, res) => {
  const studentId = req.user.userId;
  const records = await Leave.find({ studentId });
  res.json(records);
};
