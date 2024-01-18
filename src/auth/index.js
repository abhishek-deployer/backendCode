const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const authSchema = require('../schemas/authSchema');

// Create a Mongoose model based on the schema
const User = mongoose.model('Auth', authSchema);

// JWT Secret Key (Replace this with a more secure secret key in a real application)
const jwtSecretKey = 'yourSecretKey';

// Signup controller
const signup = async (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  // Validate using the schema
  const validation = User.validate({ username, password });

  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  try {
    // Create a new user in the database
    const newUser = new User({ username, password });
    await newUser.save();

    // Generate token
    const token = jwt.sign({ username }, jwtSecretKey);

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


// Login controller
const login = async (req, res) => {
  const { username, password } = req.body;

  // Validate using the schema
  const validation = User.validate({ username, password });
  console.log("validate",validation)

  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  try {
    // Find user in the database
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    // Generate token on successful login
    const token = jwt.sign({ username }, jwtSecretKey);

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { signup, login };
