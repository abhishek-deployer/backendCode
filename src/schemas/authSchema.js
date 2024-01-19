const mongoose = require('mongoose');

// Define the Mongoose schema
const authSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the Mongoose schema
module.exports = authSchema;
