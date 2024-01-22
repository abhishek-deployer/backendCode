const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose =require("mongoose")
mongoose.connect(`mongodb+srv://abhishek2019kr:w4D8e0e9TgqedXgh@cluster0.hvorilr.mongodb.net/Backend`)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importing routes
const authRoutes = require('./src/routes/auth');
const categoryRoutes=require("./src/admin/routes/categoryRoutes")

// Using routes
app.use('/auth', authRoutes);
app.use('/admin', categoryRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
