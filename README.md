![ReachEngine Logo](/client/public/Automated%20Cold%20Mailer.png)


# ReachEngine – Auto Cold Mailer  


  <b>Automated Cold Mailer</b> – A simple yet powerful tool for sending cold emails to clients, customers, and prospects.  


### Built with ❤️ using <b>React</b>, <b>Node.js</b>, and <b>Material-UI</b>  

---

### _This is a utility tool I have developed for My Personal use. Now you can also configure free to use this tool_

_**It will be helpful for programmers, Frelancers and customer requirement people**_

## Overview  

ReachEngine is a utility tool built for automating cold emails (and SMS in the future).  
You can configure it to:  

- Send bulk cold emails to a list of recipients.  
- Send personalized messages to a single contact.  
- Save time and effort in client outreach, freelancing, or lead generation.
- use store data for later reference

⚡ While originally built for my personal use, **anyone can configure and use it**.  


## Project Structure  

```
.
├── server
│   ├── controllers
│   │   └── message.controller.js
│   ├── data.json
│   ├── index.js
│   ├── routes
│   │   └── message.routes.js
│   ├── package.json
│   └── ...
├── client
│   ├── src
│   │   ├── App.jsx
│   │   ├── pages
│   │   │   ├── DashboardPage.jsx
│   │   │   └── HomePage.jsx
│   │   └── ...
│   ├── public
│   ├── package.json
│   └── ...
```


## ✨ Features  

- **React Frontend** – Modern SPA built with React + Vite  
- **Material-UI** – Clean and responsive UI components  
- **React Router** – Smooth navigation  
- **Node.js/Express Backend** – Lightweight and modular  
- **Email Sending** – Uses `nodemailer` with [Ethereal Email](https://ethereal.email/) (for testing)  
- **Organized Backend** – Routes + Controllers structure  


## Future Enhancements  

- **Voice control system**  
- **SMS sending support**
- **WhatsApp and Telegram Bots**
- **UI improvements** – Better alignment, responsive dashboard  
- **Analytics** – Track email performance (open/click rates)  
- **Authentication** – Secure access for multiple users  


# Getting Started

## Clone the repository:

```
git clone https://github.com/yourusername/Automated-Cold-Mailer.git
cd Automated-Cold-Mailer
```

## Configure Environment Variables
Create a `.env` file in the `server` directory with the following content:
```
ENV=development
PORT=3000

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_email_password

GEMINI_API_KEY=
# or for OpenAI
OPENAI_API_KEY=
```

## Install Dependencies
```
cd server && npm install
cd ../client && npm install
```

## Run Backend
```
cd server
npm start
```

## Run Frontend
```
cd client
npm run dev
```

## Author
<p align="center"> Developed By - <b>Siddhant Kore</b><br/> <a href="https://linkedin.com/in/siddhantkore0bb" target="_blank">🌐 Connect on LinkedIn</a> </p>