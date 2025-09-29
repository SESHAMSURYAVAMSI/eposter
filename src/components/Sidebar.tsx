"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4 flex flex-col">
      <h2 className="text-lg font-bold text-[#005173] mb-6">Dashboard</h2>

      <nav className="flex-1">
        <ul className="space-y-3">
          <li><Link href="/dashboard" className="block p-2 hover:bg-gray-100 rounded">🏠 Dashboard</Link></li>
          <li><Link href="/dashboard/profile" className="block p-2 hover:bg-gray-100 rounded">👤 My Profile</Link></li>
          <li><Link href="/dashboard/submit" className="block p-2 hover:bg-gray-100 rounded">📝 Submit ePoster</Link></li>
          <li><Link href="/dashboard/published" className="block p-2 hover:bg-gray-100 rounded">✅ Published ePoster</Link></li>
          <li><Link href="/dashboard/unpublished" className="block p-2 hover:bg-gray-100 rounded">📂 Unpublished ePoster</Link></li>
          <li><Link href="/dashboard/review" className="block p-2 hover:bg-gray-100 rounded">🕒 Pending Review</Link></li>
          <li><Link href="/dashboard/settings" className="block p-2 hover:bg-gray-100 rounded">⚙️ Settings</Link></li>
        </ul>
      </nav>

      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
      >
        🚪 Sign Out
      </button>
    </aside>
  );
}
