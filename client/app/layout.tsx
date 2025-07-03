import "../styles/index.css";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Movie Recommendation App",
  description: "Personalized movie recommendations, watchlist, reviews, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="max-w-5xl mx-auto p-4">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}