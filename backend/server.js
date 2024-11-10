const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');  // Import auth routes

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());  // Middleware to parse JSON request bodies
app.use(cors());  // Enable CORS

// Register the auth routes
app.use('/api/auth', authRoutes);  // This mounts authRoutes to '/api/auth'

// MongoDB connection (make sure your MongoDB URI is correct)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
