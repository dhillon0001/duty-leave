// backend/models/Leave.js
const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventType: { type: String, required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, default: 'pending' },
  certificateUploaded: { type: Boolean, default: false },
});

const Leave = mongoose.model('Leave', LeaveSchema);

module.exports = Leave;
