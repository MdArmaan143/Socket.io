# 💬 Real-Time Chat Application using Socket.io

This is a simple real-time chat application built using Node.js, Express, and Socket.io. Users can send and receive messages instantly through web sockets.

---

## 🚀 Live Demo

🔗 https://socket-io-cx4b.onrender.com/

---

## 📂 Project Structure

Socket.io/
├── public/
│   ├── index.html         # Frontend UI
│   └── style.css          # Styling for chat
├── index.js               # Main backend server file
├── package.json           # Project metadata and dependencies
└── README.md              # This file

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- Socket.io
- HTML / CSS / JavaScript

---

## 📥 Installation

To run this project locally:

git clone https://github.com/MdArmaan143/Socket.io.git
cd Socket.io
npm install
npm start

Server will start at: http://localhost:3000

---

## 🛠 Features

- Real-time messaging using Socket.io
- Broadcast messages to all connected users
- Simple UI for sending/receiving messages
- Responsive layout

---

## 🧠 How It Works (Socket.io Flow)

1. User opens the app → frontend connects to server using io()
2. User types a message and clicks Send
3. Client emits: socket.emit("user-message", message)
4. Server listens for "user-message" and broadcasts it using io.emit("message", message)
5. All clients listen for "message" and display it instantly

---

## ✍️ Author

Md Armaan  
GitHub: https://github.com/MdArmaan143

---

## 📃 License

This project is licensed under the MIT License.
