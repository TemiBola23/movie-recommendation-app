"use client";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import API from "../services/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await API.post("/auth/register", form);
      login(res.data.token);
      router.push("/");
    } catch (e: any) {
      setError(e?.response?.data?.message || "Register failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-12 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <div className="mb-2 text-red-600">{error}</div>}
      <input
        className="w-full border px-3 py-2 mb-3 rounded"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border px-3 py-2 mb-3 rounded"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        type="email"
      />
      <input
        className="w-full border px-3 py-2 mb-3 rounded"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        type="password"
      />
      <button className="w-full bg-yellow-500 text-white py-2 rounded font-semibold" type="submit">
        Register
      </button>
    </form>
  );
}