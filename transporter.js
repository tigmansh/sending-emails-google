const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gargtigmanshu@gmail.com",
    pass: "abjc mfsh tfzj kvrb",
  },
});

module.exports = { transporter };
