import React from "react";
import pfp from "./images/Mexican Freddy.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Your Account</h1>
      <img scr={pfp} alt="Mexican Freddy" className="w-32 h-32 rounded-full mb-4" />
      <p className="text-gray-700 text-lg">
        This is the About page. Here you can describe what your site is about.
      </p>
    </div>
  );
};

export default AboutPage;
