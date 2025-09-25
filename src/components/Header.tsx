"use client";

import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Header(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = () => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      setIsLoggedIn(!!loggedInUser);
    };

    checkLogin(); // initial check
    window.addEventListener("storage", checkLogin); // multi-tab
    window.addEventListener("login", checkLogin); // same-tab custom event

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("login", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);

    // dispatch custom event so header updates immediately
    window.dispatchEvent(new Event("login"));

    router.push("/login"); // redirect after logout
  };

  const handleSubmitEposterClick = () => {
    if (isLoggedIn) {
      router.push("/dashboard/submit-eposter"); // ✅ redirect inside dashboard
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="w-full border-b shadow-sm bg-white">
      {/* Top Section */}
      <div className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSubmitEposterClick}
            className={`font-semibold px-2 py-1 rounded-md transition ${
              isLoggedIn
                ? "bg-[#005173] text-white hover:bg-orange-400"
                : "bg-gray-300 text-gray-500 hover:bg-gray-400"
            }`}
          >
            SUBMIT ePOSTER
          </button>

          {!isLoggedIn ? (
            <Link href="/login">
              <button className="bg-[#005173] text-white font-semibold px-2 py-1 rounded-md hover:bg-orange-400 transition">
                LOGIN
              </button>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-[red] text-white font-semibold px-2 py-1 rounded-md hover:bg-orange-400 transition"
            >
              LOGOUT
            </button>
          )}
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/Eposter.svg"
            alt="ePoster Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* More Button */}
        <div className="flex items-center">
          <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow">
            <FiMoreHorizontal size={22} />
          </button>
        </div>
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
