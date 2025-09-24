"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
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
    console.log("Signup data:", form);
    // TODO: Connect to API
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-96">
      <h2 className="text-xl font-bold text-center mb-6 text-[#005173]">
        Presenter Sign-up
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      <input
        type="text"
        name="institute"
        placeholder="Affiliation/Institute"
        value={form.institute}
        onChange={handleChange}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      <input
        type="password"
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
        <Link href="/forgot-password" className="text-[#005173]">
          Forget Password?
        </Link>
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
