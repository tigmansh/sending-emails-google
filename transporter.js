const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gargtigmanshu@gmail.com",
    pass: "ecba qofq frpr tlju",
  },
});

module.exports = { transporter };
