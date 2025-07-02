# 🎬 Movie Recommendation App

A full-featured movie recommendation platform where users can discover, search, and save their favorite movies.

## 🔑 Features

- 🔐 **User Authentication** (JWT-based login/register)
- 🎞️ **Movie Discovery** with filtering by title, genre, rating, and popularity
- ⭐ **Personalized Recommendations** based on user activity
- 📝 **User Reviews** and custom watchlists
- 📱 **Mobile-Responsive UI** with TailwindCSS and shadcn/ui
- 📦 **Integration with TMDB API** for real-time movie data
- 📽️ **Movie Trailer Embeds**
- 👥 **Social Features** (Follow and Share)
- 🚀 **CI/CD** with Vercel + Render deployment

## 🧠 Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons
- **Backend:** Express.js, Node.js, MongoDB, JWT, Mongoose
- **APIs:** [TMDB API](https://www.themoviedb.org/documentation/api)
- **Deployment:** Vercel (Frontend), Render (Backend)

## 🌐 Live Demo

Check out the live app: [https://movie-app-demo.vercel.app](https://movie-app-demo.vercel.app)

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/movie-recommendation-app.git
cd movie-recommendation-app
```

### 2. Setup Environment Variables

Create `.env` files in `server/` and `client/` using `.env.example` as template.

### 3. Run Locally

```bash
# In server/
npm install
npm run dev

# In client/
npm install
npm run dev
```

## 🛠️ Vercel Configuration

This `vercel.json` ensures Vercel deploys the frontend and routes API calls to the backend.

## 📁 Project Structure

```
movie-recommendation-app/
├── client/         # Next.js frontend
├── server/         # Express.js backend
├── vercel.json     # Deployment config
└── README.md
```

## 🧪 Testing

- Backend: Postman for API routes
- Frontend: Cypress, Playwright or React Testing Library

## 👥 Authors

- Temibola23 — [GitHub](https://github.com/Temibola23)
