const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

exports.sendEmailToUser = async (name, email) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Thank you for contacting House of Revera',
    html: `<p>Dear ${name},</p><p>Thank you for reaching out to House of Revera. We’ll get back to you shortly!</p><p>Warm regards,<br>Team Revera</p>`
  };

  return transporter.sendMail(mailOptions);
};

exports.sendEmailToOwner = async (name, email, message) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.OWNER_EMAIL,
    subject: 'New Contact Form Submission',
    html: `<h3>New Inquiry</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
  };

  return transporter.sendMail(mailOptions);
};
