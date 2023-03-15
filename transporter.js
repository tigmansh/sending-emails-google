const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gargtigmanshu@gmail.com",
    pass: "buzs oilt bfqn nlqr",
  },
});

module.exports = { transporter };
