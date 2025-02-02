BeyondChats Chatbot Integration Project
Overview
This project aims to build a simple UI/UX workflow for BeyondChats, a chatbot company, using ReactJS. The project involves creating a user-friendly registration page, email verification, and chatbot integration with the "Continue with Google" feature. A live chatbot interface that provides dummy responses and can be integrated on any website. Fully responsive and styled UI for optimal viewing across devices.
Features
•	User Registration Page: A form that allows users to register with their email address, and also provides the option to register using Google.
•	Email Verification: Sends a verification email to users after registration to confirm their email address.
•	Chatbot Integration: A live chatbot interface that provides dummy responses and can be integrated on any website.
•	Responsive Design: Fully responsive and styled UI for optimal viewing across devices.
Technology
•	Frontend:
o	ReactJS 
o	Material-UI (MUI)
o	Google Auth for "Continue with Google"
o	JavaScript/ES6
•	Backend (optional):
o	ExpressJS (for handling API calls like email verification)
o	Node.js
•	Styling:
o	CSS-in-JS using Material-UI
Setup and Installation
1.	Clone the Repository:
https://github.com/rajukunarapu/beyondChats_Deploy.git
2.	Navigate to the Project Directory
cd beyondchatssetup
3.	Install Dependencies for frontend:
npm install  @mui/material  @mui/icons-material  @emotion/react  @emotion/styled  firebase react-router-dom
4.	Install Dependencies for backend:
npm install  express  cors  nodemailer cheerio

5.	Start the Development for frontend:
npm run dev    //  vite app
 
6.	Start the Development for backend:
node server.js
This will start the development server and open the application in your default browser at http://localhost:5173.
Components
1. Registration Page
•	Allows the user to create an account using their email address.
•	S
•	After registration, users must verify their email before continuing.
2. Email Verification
•	Sends an email verification link to the registered user's email.
•	Upon clicking the link, users will be able to access the next step of the workflow.
3. Chatbot Integration
•	The chatbot interface is fully functional and provides dummy responses.
•	Users can start the chat by clicking the "Chat" button, and can type their message into the input field.
•	The chatbot provides dummy replies based on user input.
•	The UI is built using Material-UI components for a polished, professional look.
Screenshots
 
Step1: resgistration form

Step2 : After enterin the credentials naviage to next page for email verification and also use
Constinue with google
 
 
Step3:- Enter the email for verification after that it will move next page 

Step4:- In setupOrganiztion we have 3 fields whenever we type url it will
Fetch the metadata from that website
 
 
Step5: This table will open under that form whenever we click continue and we can 
Navigate to next page by clicking on url of that table

Sptep6: It will open a scraped webpages 

 
Step7: we can open dummy chatbot to get the information
 
 

Step8: After clicking the integrate on webpage we can see successfull integrate message

Note: I tried my best to deploy the project on vercel, but I got so many error that’s why I showed
screenshots
