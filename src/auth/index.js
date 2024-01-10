// Mock user data (Replace this with a database in a real application)
const users = [];

// Importing schema
const authSchema = require('../schemas/authSchema');

// Signup controller
const signup = (req, res) => {
  const { username, password } = req.body;

  // Validate using the schema
  const validation = authSchema.validate({ username, password });

  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  // Mock user creation (Replace this with database interaction)
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).send('User created successfully');
};

// Login controller
const login = (req, res) => {
  const { username, password } = req.body;

  // Validate using the schema
  const validation = authSchema.validate({ username, password });

  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  // Mock user authentication (Replace this with database interaction)
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  res.send('Login successful');
};

module.exports = { signup, login };
