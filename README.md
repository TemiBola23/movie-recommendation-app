<h1 align="center">🎬 Movie Recommendation App</h1>
<p align="center">
  <em>Discover, search, and save your favorite movies in one seamless experience.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/github/deployments/Temibola23/movie-recommendation-app/production?label=vercel&logo=vercel&style=flat-square">
  <img src="https://img.shields.io/badge/Backend-Render-blue?logo=render&style=flat-square">
  <img src="https://img.shields.io/badge/Made%20with-Next.js-blue?style=flat-square&logo=next.js">
  <img src="https://img.shields.io/github/license/Temibola23/movie-recommendation-app?style=flat-square">
</p>

---

## 🌟 Live Demo

> 🔗 [https://temibola-movies.vercel.app](https://temibola-movies.vercel.app) *(example: replace with your real URL after deploy)*

---

## 🚀 Project Overview

A full-featured fullstack movie platform where users can:

- 🔍 Search movies by title, genre, year
- 🎞 View trailers and detailed movie info
- ⭐ Rate, review, and save favorites
- 🧠 Get personalized recommendations
- 📱 Enjoy a mobile-first, responsive UI
- 🔐 Register, login, and manage profiles

---

## 🎯 Learning Objectives Met

✅ Connect React frontend to Express backend  
✅ Implement JWT-based authentication  
✅ Work with external APIs (TMDB)  
✅ Deploy fullstack app (Vercel + Render)  
✅ Implement advanced recommendation logic  
✅ Add social sharing and watchlist features  

---

## 🛠 Tech Stack

| Frontend | Backend | Database | Auth | API |
|---------|---------|----------|------|-----|
| Next.js 14 + TypeScript | Express.js | MongoDB (Atlas) | JWT | TMDB API |

- **UI:** Tailwind CSS, shadcn/ui, Lucide Icons  
- **State Mgmt:** React Context API  
- **CI/CD:** Vercel (frontend), Render (backend)  
- **SEO & Accessibility:** Metadata + responsive & accessible design

---

## 📦 Project Structure

movie-recommendation-app/ ├── client/             # Next.js 14 frontend │   ├── public/ │   └── src/ │       ├── components/ │       │   ├── Navbar.tsx, MovieSearch.tsx, MovieCard.tsx, ... │       ├── services/api.ts │       ├── app/        # App router structure (Next.js) ├── server/             # Express backend │   ├── controllers/ │   ├── models/ │   ├── routes/ │   ├── middleware/ │   ├── .env.example │   └── server.js ├── .gitignore ├── vercel.json └── README.md

---

## 🧪 Features

### ✅ Core Features

- **Authentication** – Secure signup/login with JWT
- **Movie Search** – Filter by genre, year, rating, and popularity
- **Personalization** – Watchlist and recommendations
- **User Reviews** – Rate and comment on movies
- **Profile Dashboard** – Manage reviews and saved movies

### 🔁 Stretch Goals Implemented

- [x] Movie trailer integration (via TMDB)
- [x] Social features (follow users, share watchlists)
- [x] Advanced recommendation algorithm
- [x] Mobile responsive design
- [x] CI/CD pipeline setup
- [x] Error boundaries and loading states
- [x] SEO optimization

---

## 🔐 Environment Variables

Create two `.env` files for your setup:

**server/.env**

MONGO_URI=your_mongodb_atlas_uri JWT_SECRET=your_secure_jwt_secret

**client/.env.local**

VITE_BACKEND_URL=https://your-render-backend.onrender.com/api TMDB_API_KEY=your_tmdb_key

---

## 🧪 Running Locally

```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm run dev


---

🚀 Deployment

Frontend (Vercel)

Connect your GitHub repo to Vercel

Set project root as client/

Add client/.env.local variables in Vercel settings

Vercel auto-detects Next.js + builds


Backend (Render)

Create a new Web Service

Root path: server/

Set build command: npm install

Set start command: node server.js

Add server/.env variables



---

🧠 Credits

Built by Temibola23
Email: temitopebolatito21@gmail.com


---

📌 License

MIT License


---

❤️ Show Some Love

If you found this project helpful, consider giving it a ⭐ on GitHub!

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Temibola23&show_icons=true&theme=tokyonight&hide_border=true" width="49%">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Temibola23&layout=compact&theme=tokyonight&hide_border=true" width="49%">
</p>
```
---

