import React from "react";
import Link from "next/link";
import Navigation from "./components/Navigation"; // Import Navigation component
import Footer from "./components/Footer"; // Import Footer component

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-900 text-white pt-16">
        <section className="text-center max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-6">Welcome to Your Media Center</h1>
          <p className="text-lg mb-8 text-gray-400">
            Access your media and manage your content seamlessly. Choose a service below to get started.
          </p>
          {/* Services Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://emby.sanakerdagestad.no"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-orange-600 rounded-lg shadow-lg hover:bg-amber-500 transition-all w-72 text-center"
            >
              <h2 className="text-2xl font-semibold group-hover:text-white">Emby</h2>
              <p className="text-gray-200 group-hover:text-gray-100">
                Your personal media server for streaming movies, TV, and more.
              </p>
            </Link>

            <Link
              href="https://request.sanakerdagestad.no"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-500 transition-all w-72 text-center">
              <h2 className="text-2xl font-semibold text-white group-hover:text-white">Jellyseerr</h2>
              <p className="text-purple-100 group-hover:text-purple-50">
    Request your favorite movies and shows with Jellyseerr.
  </p>
</Link>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
