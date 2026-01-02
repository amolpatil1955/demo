"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg px-6 py-4 flex justify-between items-center text-white relative">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-lg">
        MyBrand
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <a className="text-lg hover:scale-110 transition-all duration-300" href="/">
          Home
        </a>
        <a className="text-lg hover:scale-110 transition-all duration-300" href="/about">
          About
        </a>

        {/* Profile */}
        <div className="relative">
          <FaUserCircle
            size={34}
            className="cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={() => setProfileOpen(!profileOpen)}
          />

          {/* Profile Dropdown */}
          <div
            className={`absolute right-0 mt-3 w-52 bg-white text-gray-800 rounded-xl shadow-xl transform transition-all duration-300 origin-top ${
              profileOpen
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <p className="font-bold text-lg">Amol Rajput</p>
              <p className="text-sm text-gray-600">amol@example.com</p>
              <button className="mt-3 w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-1.5 rounded-lg shadow-md hover:scale-105 transition-all">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full bg-white text-gray-800 md:hidden rounded-b-2xl shadow-xl transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 space-y-4">
          <a className="block text-lg hover:text-purple-500 transition" href="/">
            Home
          </a>
          <a className="block text-lg hover:text-purple-500 transition" href="/about">
            About
          </a>

          {/* User Details Mobile */}
          <div className="border-t pt-4">
            <p className="font-bold text-lg">Amol Rajput</p>
            <p className="text-sm text-gray-500">amol@example.com</p>
            <button className="mt-3 w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-1.5 rounded-lg hover:scale-105 transition-all">
              Logout
            </button>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
