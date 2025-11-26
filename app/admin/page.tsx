"use client";
// app/admin/page.tsx
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation"; // Import Navigation component
import Footer from "../components/Footer"; // Import Footer component
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.push("/login"); // Redirect to login if not logged in
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) {
    return null; // Don't render the page until the user is logged in
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-900 text-white pt-16">
        <section className="text-center max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-6">Admin Panel</h1>
          <p className="text-lg mb-8 text-gray-400">
            Manage your media services here. Choose a service to access below.
          </p>
          {/* Services Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Radarr */}
            <a
              href="https://radarr.sanakerdagestad.no"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-orange-600 rounded-lg shadow-lg hover:bg-amber-500 transition-all w-72 text-center"
            >
              <h2 className="text-2xl font-semibold group-hover:text-white">Radarr</h2>
              <p className="text-gray-200 group-hover:text-gray-100">
                Manage and track movies in your collection.
              </p>
            </a>

            {/* Sonarr */}
            <a
              href="https://sonarr.sanakerdagestad.no"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 transition-all w-72 text-center"
            >
              <h2 className="text-2xl font-semibold group-hover:text-white">Sonarr</h2>
              <p className="text-gray-200 group-hover:text-gray-100">
                Manage and track TV shows in your collection.
              </p>
            </a>

            {/* Webmin */}
            <a
              href="https://webmin.sanakerdagestad.no"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-gray-600 rounded-lg shadow-lg hover:bg-gray-500 transition-all w-72 text-center"
            >
              <h2 className="text-2xl font-semibold group-hover:text-white">Webmin</h2>
              <p className="text-gray-200 group-hover:text-gray-100">
                Access and manage your server with ease.
              </p>
            </a>
            {/* Users */}
            <a
              href="/admin/manage-users"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-500 transition-all w-72 text-center"
            >
              <h2 className="text-2xl font-semibold group-hover:text-white">Manage users</h2>
              <p className="text-gray-200 group-hover:text-gray-100">
                add or remove users.
              </p>
            </a>
            {/* HomeAssistant */}
            <a
              href="https://homeassistant.sanakerdagestad.no"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-blue-500 rounded-lg shadow-lg hover:bg-green-500 transition-all w-72 text-center"
            >
              <h2 className="text-2xl font-semibold group-hover:text-white">Home Assistant</h2>
              <p className="text-gray-200 group-hover:text-gray-100">
                Manage your smart home devices and automation.
              </p>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminPage;
