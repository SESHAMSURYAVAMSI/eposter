"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    institute: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.institute || !form.password || !form.confirmPassword) {
      alert("All fields are required!");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user data locally
    const userData = {
      name: form.name,
      institute: form.institute,
      password: form.password,
      remember: form.remember,
    };

    // If "Remember me" → store in localStorage, else sessionStorage
    if (form.remember) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
    }

    alert("Signup successful! Redirecting...");
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-96">
      <h2 className="text-xl font-bold text-center mb-6 text-[#005173]">
        Presenter Sign-up
      </h2>

      {/* Full Name */}
      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      {/* Institute */}
      <label htmlFor="institute" className="block text-sm font-semibold text-gray-700 mb-1">
        Institute / Affiliation
      </label>
      <input
        type="text"
        id="institute"
        name="institute"
        placeholder="Enter your Affiliation/Institute"
        value={form.institute}
        onChange={handleChange}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      {/* Password */}
      <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      {/* Confirm Password */}
      <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-1">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded-lg"
        required
      />

      <div className="flex justify-between items-center mb-4 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            checked={form.remember}
            onChange={handleChange}
          />
          Remember me
        </label>
        <div className="flex justify-end">
          <Link href="/reset-password" className="text-sm text-[#004466] hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#005173] text-white py-3 rounded-lg font-semibold hover:bg-[#003f59]"
      >
        SIGN UP
      </button>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-400">Or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <p className="text-center text-sm">
        Already have an Account?{" "}
        <Link href="/login" className="text-[#005173] font-semibold">
          Login
        </Link>
      </p>
    </form>
  );
}
