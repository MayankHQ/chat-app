# Talk-A-Tive 💬 – MERN Real-time Chat Application

A full-featured real-time chat app built with the MERN stack: **MongoDB**, **Express.js**, **React**, and **Node.js**.  
Includes authentication, real-time messaging using Socket.io, user search, online status, typing indicators, and a responsive UI.

---

## 🚀 Features

- 🔐 Authentication (Sign up / Login / JWT)
- 💬 Real-time one-to-one chat with Socket.io
- 🟢 Online status + Typing indicator
- 🔎 Search users by name or username
- 🔄 Instant message updates, persistent chat history
- 📱 Fully responsive (Mobile/Desktop ready)
- ✨ Clean UI with modern tech (React + Vite)

---

## 🛠 Tech Stack

| Tech       | Description                     |
|------------|---------------------------------|
| MongoDB    | Cloud database (MongoDB Atlas)  |
| Express.js | Backend web framework (Node)    |
| React      | Frontend library (Vite setup)   |
| Node.js    | JavaScript runtime (API server) |
| Socket.io  | Real-time messaging              |

---

## 📂 Project Structure

├── backend/ # Express server
│ ├── routes/ # API endpoints
│ ├── models/ # Mongoose models
│ ├── middleware/ # Auth, error handlers
│ └── server.js # Server entry point
│
├── frontend/ # React + Vite App
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ ├── services/
│ │ ├── styles/
│ │ └── utils/
│ ├── public/
│ └── vite.config.js



🚀 App will be running at: [http://localhost:5173](http://localhost:5173)

---

## 📦 Deployment Guide

### 🟢 MongoDB Atlas (Database)

- Create a **free cluster** at https://www.mongodb.com/cloud/atlas
- Add your IP to Network Access
- Create a user and copy your connection string into `MONGODB_URI`

---

### 🛠 Backend (Node.js API)

Deploy to platforms like:

| Platform  | Link                         |
|-----------|------------------------------|
| Render    | https://render.com           |
| Railway   | https://railway.app          |
| Cyclic    | https://www.cyclic.sh        |

---

### 💻 Frontend (React SPA)

Deploy to:

| Platform | Link                         |
|----------|------------------------------|
| Vercel   | https://vercel.com           |
| Netlify  | https://www.netlify.com      |


## ✅ TODO / Future Features

- [ ] Profile pic upload via Cloudinary
- [ ] Group chats
- [ ] File/image attachments
- [ ] Dark mode
- [ ] Notification system
- [ ] Emoji picker


