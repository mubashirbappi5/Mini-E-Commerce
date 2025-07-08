import React from "react";
import { ShoppingBag } from 'lucide-react';
const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[90vh] flex items-center justify-center  text-black px-4 text-center">
        <div className="max-w-5xl flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
             Welcome to MyShop
          </h1>
          <p className="text-lg md:text-xl mb-6">
            High-quality products at unbeatable prices.
          </p>
          <button className="bg-blue-300 flex items-center gap-4 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            <ShoppingBag /> Shop Now
          </button>
        </div>
      </div>


    </div>
  );
};

export default Home;
