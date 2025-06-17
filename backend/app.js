const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: ['http://127.0.0.1:5500', 'https://houseofrevera.vercel.app/'], // replace with your actual Render static site URL
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use('/api/contact', contactRoutes);

module.exports = app;
