// app/dashboard/page.tsx
"use client";

import { useState } from "react";

// Icons
import { MdDashboard, MdPending } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaUser, FaSignOutAlt, FaCog, FaFileAlt, FaFileArchive } from "react-icons/fa";

export default function DashboardPage() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard size={20} /> },
    { name: "My Profile", icon: <FaUser size={20} /> },
    { name: "Submit ePoster", icon: <RiFilePaper2Line size={20} /> },
    { name: "Published ePoster", icon: <FaFileAlt size={20} /> },       // works fine
    { name: "Unpublished ePoster", icon: <FaFileArchive size={20} /> }, // works fine
    { name: "Pending Review", icon: <MdPending size={20} /> },
    { name: "Settings", icon: <FaCog size={20} /> },
    { name: "Sign Out", icon: <FaSignOutAlt size={20} /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center w-full px-4 py-3 rounded-xl text-left transition
                ${
                  active === item.name
                    ? "bg-teal-700 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">{active}</h1>
        <p className="mt-4 text-gray-600">
          This is the <b>{active}</b> section content.
        </p>
      </main>
    </div>
  );
}
