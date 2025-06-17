const { sendEmailToUser, sendEmailToOwner } = require('../services/mailService');

exports.sendContactEmails = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendEmailToUser(name, email);
    await sendEmailToOwner(name, email, message);
    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to send emails' });
  }
};
