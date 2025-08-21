"use client";

import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";

export default function Header() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [people, setPeople] = useState(2);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-24 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl text-purple-600">eReJa</div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 items-center justify-center max-w-4xl">
          <div className="flex w-full rounded-2xl shadow-sm border">
            <input
              type="text"
              placeholder="Area/Station [e.g. Ginza, Shibuya]"
              className="flex-1 px-4 py-2 border-r outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Keywords [e.g. yakiniku, restaurant name]"
              className="flex-1 px-4 py-2 border-r outline-none text-sm"
            />
            <div className="flex items-center gap-2 px-3 border-r">
              <Calendar className="w-4 h-4 text-gray-500" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2 px-3 border-r">
              <Clock className="w-4 h-4 text-gray-500" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2 px-3">
              <Users className="w-4 h-4 text-gray-500" />
              <select
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="outline-none text-sm"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} people
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-r-2xl font-medium hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4 ml-4">
          <button className="text-gray-700 hover:text-purple-600 text-sm font-medium">
            About
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 text-sm">
            Register / Login
          </button>
        </div>
      </div>
    </header>
  );
}
