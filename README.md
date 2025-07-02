# 🎬 Movie Recommendation App

A fullstack app that allows users to discover, search, and manage their favorite movies. Built with React, Express, MongoDB, and TMDB API.

## 🚀 Features

- 🔐 JWT authentication (register/login)
- 🔍 Movie search, filter, and discovery using TMDB API
- ⭐ Rate, review, and favorite movies
- 📚 Custom watchlists per user
- 🧠 Personalized recommendations
- 👥 Follow users & share watchlists
- 🎥 Movie trailer integration
- 📱 Responsive design (mobile + desktop)

## 🛠 Tech Stack

- **Frontend:** React (Vite + TS), Tailwind CSS, shadcn/ui, Lucide Icons
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **API Integration:** [TMDB](https://developer.themoviedb.org)
- **Auth:** JWT
- **Deployment:** Vercel (frontend), Render (backend)

## 🌐 Live Demo

[🔗 View Live App](https://your-clean-domain.vercel.app)

## 🧪 Environment Setup

Create `.env` files for both frontend and backend:

### `client/.env.example`
```env
VITE_TMDB_API_KEY=your_tmdb_key
VITE_BACKEND_URL=http://localhost:5000

server/.env.example

PORT=5000
MONGO_URI=mongodb://localhost:27017/movieapp
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_key

🧾 Scripts

# Client
cd client
npm install
npm run dev

# Server
cd server
npm install
npm run dev

📦 Deployment

Frontend → Vercel

Backend → Render (with MongoDB Atlas)

✅ Project Structure 

movie-recommendation-app/
├── client/
│   └── src/
│       ├── components/
│       │   ├── MovieSearch.tsx
│       │   ├── MovieDetails.tsx
│       │   ├── Login.tsx
│       │   ├── Register.tsx
│       │   ├── UserProfile.tsx
│       │   ├── WatchlistManager.tsx
│       │   ├── ReviewForm.tsx
│       │   └── Navbar.tsx
│       ├── services/
│       │   └── api.js
│       ├── index.tsx
│       ├── App.tsx
│       └── index.css
├── server/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── movieController.js
│   │   └── reviewController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── movieRoutes.js
│   │   ├── userRoutes.js
│   │   └── reviewRoutes.js
│   ├── server.js
│   └── .env.example
├── .gitignore
└── README.md
---
