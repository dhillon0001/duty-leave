const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Assuming you have a User model
const router = express.Router();

// JWT Secret key (for signing tokens)
const JWT_SECRET = 'your-secret-key';  // Make sure to use a secure secret key in production

// POST route for registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      email,
      password: await bcrypt.hash(password, 10),  // Hashing password
    });

    await newUser.save();

    // Generate a JWT token
    const payload = { userId: newUser._id, email: newUser.email };
    const token = jwt.sign(payload, JWT_SECRET);  // Create a JWT token without expiry

    // Send the token in the response
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
