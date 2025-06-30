# 🎬 Movie Recommendation App

A full-featured movie recommendation platform where users can discover, search, rate, and save their favorite movies. Built with a fullstack architecture using **React**, **Express.js**, **MongoDB**, and integrated with the **TMDB API**.

---

## 🚀 Live Demo

🌐 [View Live Demo](https://nkd.in/dwXMQWS7)

---

## 🎯 Learning Objectives

- ✅ Connect frontend (React) and backend (Express) systems
- ✅ Implement secure JWT authentication flows
- ✅ Deploy fullstack applications using **Render** and **Vercel**
- ✅ Work with real-world external APIs like **TMDB**

---

## 🛠 Tech Stack

| Tech         | Usage                           |
|--------------|----------------------------------|
| React + Vite | Frontend (with Tailwind + shadcn/ui) |
| Express.js   | Backend API and auth system      |
| MongoDB      | Database for users & reviews     |
| JWT          | Secure token-based authentication |
| TMDB API     | Real-time movie data             |
| Render       | Backend deployment               |
| Vercel       | Frontend deployment              |

---

## ✨ Features

### ✅ Core

- 🔐 User Authentication (JWT, hashed passwords)
- 🔍 Movie Discovery by genre, rating, popularity
- 🎞️ View detailed movie info (poster, rating, description)
- 🌟 Personalized watchlist with persistent storage
- 📝 User movie reviews with rating and comments
- 🧑 Profile management with review history
- 📱 Fully responsive modern UI

### 🧠 Advanced

- 🧪 Real-time TMDB search + filtering
- 📄 Pagination support
- 🧬 Content-based recommendation algorithm
- 🎥 Movie trailer integration
- 🧩 Modular React component architecture

---

## 📁 Project Structure

movie-recommendation-app/ ├── client/ │   └── src/ │       ├── components/         # React UI components │       ├── services/           # API requests │       ├── App.tsx             # Routing & layout │       └── index.css           # Tailwind CSS ├── server/ │   ├── controllers/            # Logic for auth, movies, reviews │   ├── middleware/             # JWT verification │   ├── models/                 # Mongoose schemas │   ├── routes/                 # Express route files │   ├── server.js               # App entry point │   └── .env.example            # Environment config sample ├── .gitignore └── README.md

---

## 🔧 Setup Instructions

### 📦 Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- TMDB API Key (from [themoviedb.org](https://www.themoviedb.org/))

---

### 🧪 Local Development

```bash
# 1. Clone repo
git clone https://github.com/yourusername/movie-recommendation-app
cd movie-recommendation-app

# 2. Set up environment variables
cp server/.env.example server/.env

# 3. Install server & client
cd server && npm install
cd ../client && npm install

# 4. Start both servers
# Terminal 1
cd server && npm run dev

# Terminal 2
cd client && npm run dev


---

☁️ Deployment

🟦 Backend (Render)

Connect your GitHub repo

Add environment variables:

PORT

MONGO_URI

JWT_SECRET

TMDB_API_KEY


Build Command: npm install

Start Command: node server.js


🟩 Frontend (Vercel)

Import from GitHub

Set build command: npm run build

Output directory: dist



---

📚 API Endpoints

Auth

POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile


TMDB

GET /api/tmdb/search?query=...&page=...

GET /api/tmdb/discover?sort_by=...&page=...


Reviews

POST /api/reviews

GET /api/reviews/movie/:id

GET /api/reviews/user



---

✅ Stretch Goals

👥 Social features (follow users, share watchlists)

🧠 Enhanced AI movie recommendation engine

🎥 Trailer previews and modal popups



---

📝 License

MIT © 2025 [Kulogun Temitope Bolatito]

---
