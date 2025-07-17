const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await user.comparePassword(password)) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
