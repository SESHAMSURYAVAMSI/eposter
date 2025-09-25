import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JSX } from "react";
import UpcomingEvents from "@/components/UpcomingEvents";

export const metadata: Metadata = {
  title: "ePoster.in",
  description: "ePoster site built with Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="max-w-7xl mx-auto">{children}</main>
         <UpcomingEvents />
        <Footer />
      </body>
    </html>
  );
}
