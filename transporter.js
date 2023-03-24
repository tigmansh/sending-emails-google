const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gargtigmanshu@gmail.com",
    pass: "bwjx yucl bywt wplo",
  },
});

module.exports = { transporter };
