// const mongoose = require('mongoose');

// // Define the Mongoose schema
// const categorySchema = new mongoose.Schema({
 
//   categoryName: {
//     type: String,
//     required: true,
//   }
// });

// // Export the Mongoose schema
// module.exports = categorySchema;

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Category', categorySchema);

