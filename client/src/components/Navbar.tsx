"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
      <Link href="/" className="font-bold text-lg text-yellow-400">
        🎬 MovieApp
      </Link>
      <div className="flex gap-4">
        {user ? (
          <>
            <Link href="/watchlist">Watchlist</Link>
            <Link href={`/profile/${user.id}`}>Profile</Link>
            <button className="ml-2 hover:underline" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}