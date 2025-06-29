
# 🎬 Movie Recommendation App

A fullstack movie recommendation platform built with **React**, **Express.js**, **MongoDB**, and the **TMDB API**. Users can register, search movies, save favorites, rate and review, and manage personal watchlists.

---

## 🚀 Features

### 🔐 Authentication
- User registration and login
- Secure password handling with bcrypt
- JWT-based authentication

### 🎞️ Movie Discovery
- Search by title, genre, year
- Filter by rating and release date
- View detailed movie info
- Personalized recommendations

### 🙍 User Functionality
- Save favorite movies
- Create custom watchlists
- Rate and review movies
- Manage user profile

---

## 🛠️ Tech Stack

| Frontend         | Backend            | Database  | External API | Deployment      |
|------------------|--------------------|-----------|---------------|------------------|
| React + Tailwind | Express.js + JWT   | MongoDB   | TMDB API      | Netlify & Render |

---

## 📁 Project Structure

movie-recommendation-app/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── MovieSearch.js
│       │   ├── MovieDetails.js
│       │   ├── ReviewForm.js
│       │   ├── Register.js
│       │   ├── Login.js
│       │   └── UserProfile.js
│       ├── services/api.js
│       ├── index.css
│       └── App.js
├── server/
│   ├── controllers/
│   │   ├── movieController.js
│   │   ├── authController.js
│   │   └── reviewController.js
│   ├── middleware/authMiddleware.js
│   ├── models/User.js
│   ├── models/Review.js
│   ├── routes/authRoutes.js
│   ├── routes/movieRoutes.js
│   ├── routes/userRoutes.js
│   ├── routes/reviewRoutes.js
│   ├── .env.example
│   └── server.js
├── .gitignore
└── README.md


-
---

## ⚙️ Setup Instructions

### 🔧 1. Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Fill in MONGO_URI, JWT_SECRET, TMDB_API_KEY
npm run dev

💻 2. Frontend Setup

cd client
npm install
npm run dev


---

🧪 Testing

Use Postman to test routes like /api/auth/register, /api/movies/discover, /api/reviews.

Use React DevTools to inspect components and state.



---

📡 Deployment

**Frontend**: [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
 
- **Backend**: [Render](https://render.com/) or [Heroku](https://heroku.com/)
 


---

📌 Environment Variables

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
TMDB_API_KEY=your_tmdb_api_key


---

🧠 Stretch Goals

Social features (follow users, share lists)

Advanced recommendation algorithm

Movie trailer integration (YouTube)


---

👨‍💻 Author

Built as a fullstack capstone project by [Kulogun Temitope]
