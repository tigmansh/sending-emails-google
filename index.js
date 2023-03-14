const express = require("express");
const bodyParser = require("body-parser");
const { transporter } = require("./transporter");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
 app.get("/", (req,res)=>{
  res.send("home page !");
 })
  app.post("/send-email", (req, res) => {
    let mailOptions = {
      from: req.body.email,
      to: "gargtigmanshu@gmail.com",
      subject: req.body.subject,
      text: req.body.message,
    };
  
    // send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
       
        res.send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        
        res.send("Email sent successfully");
      }
    });
  });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
