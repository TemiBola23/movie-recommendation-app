 
 `# 🎬 Movie Recommendation App

A fullstack web application for discovering, searching, saving, and sharing your favorite movies — powered by the TMDB API, JWT authentication, and real-time recommendations.

## 🚀 Live Demo

🌐 [Live on Vercel](https://your-vercel-domain.vercel.app)

---

## 🧩 Features

### 🔐 User Authentication
- JWT-based secure authentication
- User registration & login
- Password encryption (bcrypt)

### 🔎 Movie Discovery
- Search movies by title, genre, or year
- Filter by rating, release date, popularity
- View detailed info & trailers
- Personalized recommendations

### 📌 User Features
- Save favorite movies
- Create & manage custom watchlists
- Rate and review movies
- User profile with following & sharing

### 🧠 Technical Highlights
- **Frontend**: Next.js 14 (App Router), Tailwind CSS, shadcn/ui, TypeScript
- **Backend**: Express.js + MongoDB + Mongoose
- **External API**: [TMDB API](https://www.themoviedb.org/)
- **Auth**: JWT, bcrypt, context-based state management
- **SEO**: Metadata, OG tags, structured content
- **UI**: Fully responsive, mobile-first, accessible

---

## 📁 Project Structure 
movie-recommendation-app/ ├── client/            # Next.js frontend │   ├── public/ │   └── src/ │       ├── components/ │       │   ├── Login.tsx, Register.tsx, MovieSearch.tsx, etc. │       ├── pages/ │       ├── services/api.ts │       ├── context/AuthContext.tsx │       └── styles/index.css ├── server/            # Express backend │   ├── controllers/ │   ├── models/ │   ├── routes/ │   ├── middleware/ │   ├── .env.example │   └── server.js ├── .gitignore └── README.md
 `
 ---  
 
## 🛠️ Installation

### 1. Clone & install

```bash
git clone https://github.com/your-username/movie-recommendation-app.git
cd movie-recommendation-app

2. Setup Environment

🧪 .env.example → .env (for both frontend and backend)

# Server (Express)
PORT=5000
MONGODB_URI=mongodb+srv://your-db-uri
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key


---

🔃 Run Locally

Backend (Express)

cd server
npm install
npm run dev

Frontend (Next.js)

cd client
npm install
npm run dev


---

☁️ Deployment

🔹 Frontend → Vercel

Connect GitHub repo

Add environment variables under Settings > Environment Variables


🔹 Backend → Render

Create Web Service

Add environment variables

Use build command: npm install

Start command: node server.js or npm start



---

🧪 Stretch Goals Implemented

✅ Follow other users

✅ Share watchlists

✅ Advanced movie recommendations

✅ Movie trailer integration

✅ Custom watchlists

✅ Pagination, fallback UI

✅ SEO-ready pages

  
## 🧑‍💻 Authors
 
**Temitope Kulogun** 
  
## 📜 License
 
MIT License
