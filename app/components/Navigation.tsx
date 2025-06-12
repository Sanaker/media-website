"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold text-white">Media Center</h1>
        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/admin" className="hover:text-gray-300">
            Admin
          </Link>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/admin" className="block px-4 py-2 hover:bg-gray-700">
            Admin
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
