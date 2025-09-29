"use client";

import { useEffect, useState } from "react";

type User = {
  name: string;
  institute: string;
  // add other properties as needed
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div>
      {/* Heading */}
      <h1 className="text-2xl font-bold text-[#005173]">DASHBOARD</h1>
      <h2 className="mt-4 text-xl font-semibold">Welcome {user.name}</h2>
      <p className="text-gray-600 mb-8">
        <strong>Affiliation:</strong> {user.institute}
      </p>

      {/* Stats - Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Published */}
        <div className="w-full shadow-md rounded-md border border-gray-200 overflow-hidden">
          <div className="bg-green-500 text-white text-center py-2 text-sm font-semibold">
            PUBLISHED ePOSTER
          </div>
          <div className="flex items-center justify-center py-6 text-4xl font-bold text-blue-900">
            06
          </div>
        </div>

        {/* Unpublished */}
        <div className="w-full shadow-md rounded-md border border-gray-200 overflow-hidden">
          <div className="bg-red-500 text-white text-center py-2 text-sm font-semibold">
            UNPUBLISHED ePOSTER
          </div>
          <div className="flex items-center justify-center py-6 text-4xl font-bold text-blue-900">
            03
          </div>
        </div>

        {/* Pending */}
        <div className="w-full shadow-md rounded-md border border-gray-200 overflow-hidden">
          <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
            PENDING REVIEW
          </div>
          <div className="flex items-center justify-center py-6 text-4xl font-bold text-blue-900">
            01
          </div>
        </div>
      </div>

      {/* Recent Posters */}
      <h2 className="text-lg font-bold mb-4">RECENT POSTERS:</h2>
      <div className="border p-4 rounded shadow">
        <p className="text-orange-600 font-semibold">UROLOGY</p>
        <h3 className="font-bold">
          Dual Primary Malignancy in Different organ System - Diagnostic Dilemma
          & Management Challenges!
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Presenting Author:</strong> Manoj Kiran Vaidya <br />
          <strong>Affiliation:</strong> BLDE DEEMED TO BE UNIVERSITY, HYD <br />
          <strong>Event:</strong> SZUSICON 2023, Kerala <br />
          <strong>Publish Date:</strong> 24-02-2025
        </p>
      </div>
    </div>
  );
}
