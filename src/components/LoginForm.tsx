"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    const parsedUser = JSON.parse(savedUser);

    if (form.email === parsedUser.name || form.email === parsedUser.institute) {
      if (form.password === parsedUser.password) {
        // ✅ Save logged in user
        localStorage.setItem("loggedInUser", JSON.stringify(parsedUser));

        // ✅ Dispatch custom event so Header updates
        window.dispatchEvent(new Event("login"));

        alert("Login successful!");
        router.push("/dashboard"); // Redirect
      } else {
        alert("Incorrect password!");
      }
    } else {
      alert("User not found!");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    alert("Under Integration.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md w-96"
    >
      <h2 className="text-xl font-bold text-center mb-6 text-[#005173]">
        Presenter Login
      </h2>

      {/* Email/Username */}
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-gray-700 mb-1"
      >
        Login
      </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter Name or Institute"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      {/* Password */}
      <label
        htmlFor="password"
        className="block text-sm font-semibold text-gray-700 mb-1"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your Password"
        value={form.password}
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
          {/* Forgot Password link */}
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
        LOGIN
      </button>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-400">Or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google Login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 font-medium shadow-sm hover:bg-gray-50"
      >
        <FcGoogle size={20} />
        Sign in with Google
      </button>

      <p className="text-center text-sm mt-4">
        Doesn’t have an Account?{" "}
        <Link href="/signup" className="text-[#005173] font-semibold">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
