require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cheerio = require('cheerio');
const axios = require('axios');
const cors = require('cors');

const app = express();

// CORS configuration (only allow FRONTEND_URL from environment variable)
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://beyond-chats-deploy-63mz-bedzfdx0q-rajus-projects-94af27f6.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true, 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 4000;
let verificationCode = {};

// Send mail
app.post('/send-email', async (req, res) => {
  if (!(req.body)) {
    return res.status(400).json({ success: false, status: 400, data: [], desc: 'Provide valid parameters' });
  }

  try {
    let { email } = req.body;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let code = Math.floor(100000 + Math.random() * 900000);
    verificationCode[email] = code;

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Enter this temporary code to continue',
      text: `Verification Code is : ${code}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).json({ success: true, status: 200, desc: 'OK: Email sent successfully' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, status: 500, desc: 'Internal Server Error: Error sending email' });
  }
});

// Verify code
app.post("/verify-code", (req, res) => {
  const { email, code } = req.body;
  if (verificationCode && verificationCode[email] == code) {
    delete verificationCode[email]; // Remove code after successful verification
    res.json({ success: true, message: "Email verified!" });
  } else {
    res.status(400).json({ success: false, message: "Invalid code" });
  }
});

// Meta-data
app.post('/fetch-meta', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'url is required' });
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const metaDescription = $('meta[name="description"]').attr("content") || "No Description found";
    res.status(200).json({ description: metaDescription });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch metadata" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
