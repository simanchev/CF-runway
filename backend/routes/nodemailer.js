require("dotenv").config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
  // {
  //   from: 'Mailer Test <process.env.EMAIL_USER>',
  // },
);

module.exports = transporter;
