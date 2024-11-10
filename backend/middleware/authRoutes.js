const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = 'your-secret-key';  // Store this securely in production

// POST route for registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    const newUser = new User({
      email,
      password: await bcrypt.hash(password, 10),
    });

    await newUser.save();

    // Create a JWT token for the new user
    const payload = { userId: newUser._id, email: newUser.email };
    const token = jwt.sign(payload, JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Export routes
module.exports = router;
