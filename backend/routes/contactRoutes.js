const express = require('express');
const router = express.Router();
const { sendContactEmails } = require('../controllers/contactController');

router.post('/', sendContactEmails);

module.exports = router;
