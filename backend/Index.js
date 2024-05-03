const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

require("./db/connection"); // connect to the database
const Users = require("./Models/User");
const Visit = require("./Models/visit"); // Corrected capitalization
const Quote = require("./Models/quote");

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "shruti.pawar9099@gmail.com",
        pass: "tlzg txje utxo zjyh",
      },
    });

    const mailOptions = {
      from: req.body.email, // sender address
      to: "shruti.pawar9099@gmail.com",
      subject: "New Enquiry Form Submission",
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}\nPhoneNo: ${req.body.phoneNo}`,
    };

    // Send mail
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        // console.log("Error occurred:", error.message);
        return res.status(500).json({ error: "Error sending email" });
      } else {
        // console.log("Message sent: %s", info.messageId);
        try {
          const value = await saveUserData(req.body);
          if (value) {
            return res.status(200).json({
              email: "Message sent successfully!",
              user: "user created successfully",
            });
          } else {
            return res.status(500).json({ error: "Error saving user data" });
          }
        } catch (saveError) {
          console.log(
            "Error occurred while saving user data:",
            saveError.message
          );
          return res.status(500).json({ error: "Error saving user data" });
        }
      }
    });
  } catch (err) {
    console.log("An unexpected error occurred:", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

async function saveUserData(data) {
  try {
    let user = new Users(data);
    await user.save();
    // console.log("User data saved successfully", user);
    return true;
  } catch (error) {
    // console.error("Error saving user data:", error);
    throw new Error("Error saving user data");
  }
}

app.post("/visit", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "shruti.pawar9099@gmail.com",
      pass: "tlzg txje utxo zjyh",
    },
  });

  const mailOptions = {
    from: req.body.email, // sender address
    to: "shruti.pawar9099@gmail.com",
    subject: "New Visit Form Submission",
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}\nPhoneNo: ${req.body.phoneNo}\nDate: ${req.body.date}\nService: ${req.body.service}\nCompany: ${req.body.company}`,
  };

  // Send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Message sent: %s", info.messageId);
      saveVisitData(req.body);
      res.status(200).json({ message: "Message sent successfully!" });
    }
  });
});

async function saveVisitData(data) {
  try {
    let visit = new Visit(data); // Save visit data to the Visit collection
    await visit.save();
    console.log("Visit data saved successfully");
  } catch (error) {
    console.error("Error saving visit data:", error);
  }
}

app.post("/quote", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "shruti.pawar9099@gmail.com",
      pass: "tlzg txje utxo zjyh",
    },
  });

  const mailOptions = {
    from: req.body.email, // sender address
    to: "shruti.pawar9099@gmail.com",
    subject: "New Quote Form Submission",
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}\nDate: ${req.body.date}\nPhoneNo: ${req.body.phoneNo}\nCompany: ${req.body.company}\nService: ${req.body.service}`,
  };

  // Send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Message sent: %s", info.messageId);
      saveQuoteData(req.body);
      res.status(200).json({ message: "Message sent successfully!" });
    }
  });
});

async function saveQuoteData(data) {
  try {
    let quote = new Quote(data); // Save quote data to the Quote collection
    await quote.save();
    console.log("Quote data saved successfully");
  } catch (error) {
    console.error("Error saving quote data:", error);
  }
}

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
