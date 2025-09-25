"use client";
import { useState } from "react";

export default function UpcomingEvents() {
  const events = [
    {
      title: "FOGSI-FIGO",
      desc: "International Conference on Women’s Health",
      date: "15th & 16th July 2023",
      color: "bg-gray-100 text-[#003c60]",
    },
    {
      title: "HSICON 2023",
      desc: "17th Annual Conference of Hernia Society of India",
      date: "31st August,1st, 2nd September, 2023",
      venue:
        "Venue: Marriott Hotel & Convention Centre, Tank Bund Road, Hyderabad, India",
      color: "bg-gray-100 text-[#003c60]",
    },
    {
      title: "ACP-2023",
      desc: "8th Annual meeting of the IM ACP India 2023",
      date: "22nd-24th September, 2023",
      color: "bg-gray-100 text-[#003c60]",
    },
    {
      title: "TRANSMEDCON",
      desc: "Annual National Conference of India Society of Transfusion Medicine",
      date: "3th, 4th, 5th November,2023",
      color: "bg-gray-100 text-[#003c60]",
    },
    {
      title: "EXTRA EVENT 1",
      desc: "Some extra event for demo",
      date: "December 2023",
      color: "bg-gray-100 text-[#003c60]",
    },
    {
      title: "EXTRA EVENT 2",
      desc: "Another demo event",
      date: "January 2024",
      color: "bg-gray-100 text-[#003c60]",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const eventsPerSlide = 4;
  const totalSlides = Math.ceil(events.length / eventsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const startIndex = currentSlide * eventsPerSlide;
  const visibleEvents = events.slice(startIndex, startIndex + eventsPerSlide);

  return (
    <div className="flex items-start bg-[#c9d1d5] p-6">
      {/* Left: Events */}
      <div className="flex flex-1">
        {visibleEvents.map((event, i) => (
          <div
            key={i}
            className={`${event.color} group flex-1 p-6 m-1 cursor-pointer transition-colors duration-300 hover:bg-[#004d66]`}
          >
            {/* Title */}
            <h2 className="font-bold mb-2 text-[#004d66] group-hover:text-orange-500">
              {event.title}
            </h2>
            {/* Description */}
            <p className="text-sm mb-2 text-black group-hover:text-white">
              {event.desc}
            </p>
            {/* Date */}
            <p className="font-bold text-[#004d66] group-hover:text-orange-500">
              {event.date}
            </p>
            {/* Venue (if any) */}
            {event.venue && (
              <p className="text-sm mt-2 text-black group-hover:text-white">
                {event.venue}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Right: Upcoming Events */}
      <div className="ml-4 flex flex-col items-center">
        {/* Title with thinner top line */}
        <div className="border-t-2 border-[#003c60] w-full pt-2 mt-3">
          <h2 className="font-bold text-[#003c60] text-2xl text-center">
            UPCOMING EVENTS
          </h2>
        </div>

        {/* Smaller Buttons, shifted left */}
        <div className="flex space-x-2 mt-2 -ml-10 w-full justify-end">
          <button
            onClick={prevSlide}
            className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-full text-black font-bold text-base hover:bg-white hover:text-black transition"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-full text-black font-bold text-base hover:bg-white hover:text-black transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
