const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose =require("mongoose")
mongoose.connect(`mongodb+srv://abhishek2019kr:w4D8e0e9TgqedXgh@cluster0.hvorilr.mongodb.net/Backend`)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importing routes
const authRoutes = require('./src/routes/auth');


// Using routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
