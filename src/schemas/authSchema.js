const Joi = require('joi');

// Define the schema for authentication
const authSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = authSchema;
