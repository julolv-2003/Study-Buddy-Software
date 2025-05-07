import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-green-100 p-8">
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Studdy Buddy</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/Account" className="hover:underline">Account</Link></li>
              <li><Link to="/Search" className="hover:underline">Search</Link></li>
              <li><Link to="/Groups" className="hover:underline">Groups</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="text-center py-20">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Learn more about what we do and how we can help you succeed.
        </p>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
