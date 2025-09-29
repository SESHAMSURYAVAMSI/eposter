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
      <h1 className="text-2xl font-bold text-[#005173]">DASHBOARD</h1>
      <h2 className="mt-4 text-xl font-semibold">
        Welcome {user.name}
      </h2>
      <p className="text-gray-600 mb-8">
        <strong>Affiliation:</strong> {user.institute}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-green-100 border-l-4 border-green-600 p-6 text-center rounded shadow">
          <h2 className="font-bold">PUBLISHED ePOSTER</h2>
          <p className="text-4xl font-bold text-teal-800">06</p>
        </div>
        <div className="bg-red-100 border-l-4 border-red-600 p-6 text-center rounded shadow">
          <h2 className="font-bold">UNPUBLISHED ePOSTER</h2>
          <p className="text-4xl font-bold text-teal-800">03</p>
        </div>
        <div className="bg-yellow-100 border-l-4 border-yellow-600 p-6 text-center rounded shadow">
          <h2 className="font-bold">PENDING REVIEW</h2>
          <p className="text-4xl font-bold text-teal-800">01</p>
        </div>
      </div>

      {/* Recent Posters */}
      <h2 className="text-lg font-bold mb-4">RECENT POSTERS:</h2>
      <div className="border p-4 rounded shadow">
        <p className="text-orange-600 font-semibold">UROLOGY</p>
        <h3 className="font-bold">
          Dual Primary Malignancy in Different organ System - Diagnostic Dilemma & Management Challenges!
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
