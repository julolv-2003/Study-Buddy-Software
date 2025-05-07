import React from "react";
import pfpimage from "./images/Mexican_Freddy.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Your Account</h1>
      <img scr={pfpimage} alt="Freddy" className="mx-auto rounded-lg shadow-lg" width={400} height={300} />
      <h4 className="text-2xl font-bold mt-8 mb-4">About Me</h4>
      <p className="text-gray-700 text-lg">
        Hello, my name is Julian and I am a CS major at California State University Fullerton. 
        I am currently taking a class on web development. I am excited to learn more about web development and to create my own website.
        Looking for anyone to study with.
      </p>
      
      

      <li><Link to="/" className="hover:underline">Return Home</Link></li>

    </div>
    
  );
};



export default AboutPage;
