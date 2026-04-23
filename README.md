# FresherWorks Auth API

## 📌 Overview

This is a production-style authentication system built using Node.js, Express, and MongoDB.

It includes secure user authentication with JWT and protected routes.

---

## 🚀 Features

* User Registration
* User Login
* Password Hashing (bcrypt)
* JWT Authentication
* Protected Routes

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt

---

## 📂 Project Structure

config/
controllers/
models/
routes/
middleware/
server.js

---

## 🔐 API Endpoints

### Register

POST /api/auth/register

### Login

POST /api/auth/login

### Get Profile (Protected)

GET /api/user/profile

---

## ⚙️ Setup Instructions

1. Install dependencies:
   npm install

2. Create .env file:
   JWT_SECRET=your_secret_key
   PORT=5000

3. Run server:
   node server.js

---

## 📌 Notes

* Passwords are hashed using bcrypt
* JWT is used for authentication
* Protected routes require a valid token
