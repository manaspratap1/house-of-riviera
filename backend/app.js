const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRoutes);

module.exports = app;
