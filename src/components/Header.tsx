"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";

export default function Header() {
  const [search, setSearch] = useState<string>("");

  return (
    <header className="w-full border-b shadow-sm bg-white">
      {/* Top Section */}
      <div className="flex justify-center items-center px-4 space-x-10 py-4">
        {/* Left Buttons */}
        <div className="flex gap-3">
          <Link href="/submit-eposter">
            <button className="bg-[#005173] text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-400 transition">
              SUBMIT ePOSTER
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-[#005173] text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-400 transition">
              LOGIN
            </button>
          </Link>
        </div>

        {/* Logo */}
        <div className="px-30 py-3 w-170">
          <h1>
            <img src="/Eposter.svg" className="h-25 w-55" />
          </h1>
        </div>

        {/* More Button */}
        <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow">
          <FiMoreHorizontal size={22} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-6 mb-4">
        <div className="flex items-center w-full max-w-6xl border rounded-lg px-3 py-2 shadow-sm">
          <FiSearch className="text-gray-400 mr-3 text-lg" />
          <input
            type="text"
            placeholder="Search ePoster Here..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            className="w-full outline-none text-base"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex justify-center gap-8 py-2 text-sm font-bold">
        {[
          { href: "/home", label: "HOME" },
          { href: "/eposter", label: "ePOSTER" },
          { href: "/award-eposter", label: "AWARD ePOSTER" },
          { href: "/events", label: "EVENTS" },
          { href: "/services", label: "SERVICES" },
          { href: "/contact", label: "CONTACT" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#005173] hover:text-orange-500 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
