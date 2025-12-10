import React from "react";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500 ">

      <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 text-center">
        Welcome to the React Website
      </h1>

      <p className="text-white text-lg md:text-xl mb-10 text-center max-w-xl">
        Click the button below for Signup
      </p>

      <Link to="/signup">
        <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
          Click to Signup
        </button>
      </Link>

    </div>
  );
};

export default Landing;
