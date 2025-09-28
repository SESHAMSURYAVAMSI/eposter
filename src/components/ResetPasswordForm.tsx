"use client";

import { useState } from "react";

export default function ResetPasswordForm() {
  const [identifier, setIdentifier] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, newPassword }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-96">
      <h2 className="text-xl font-bold text-center mb-6 text-[#005173]">Reset Password</h2>

      <label className="block text-sm font-semibold mb-1">Name or Institute</label>
      <input
        type="text"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        placeholder="Enter Name or Institute"
        className="w-full p-3 mb-3 border rounded-lg"
        required
      />

      <label className="block text-sm font-semibold mb-1">New Password</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
        className="w-full p-3 mb-4 border rounded-lg"
        required
      />

      <button type="submit" className="w-full bg-[#005173] text-white py-3 rounded-lg">
        Reset Password
      </button>

      {message && <p className="text-center mt-3">{message}</p>}
    </form>
  );
}
