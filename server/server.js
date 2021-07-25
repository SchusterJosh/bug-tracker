require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Init express
const app = express();

// Database connection
connectDB();

// Middlewares
app.use(express.json({ extended: false }));
app.use(cors());

// Define routes
app.use('/api/project', require('./routes/project'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
