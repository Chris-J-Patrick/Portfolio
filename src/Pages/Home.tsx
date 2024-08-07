import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div className="relative h-[90vh] w-full bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 flex items-center justify-center text-center">
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center"
      >
        <img
          src="https://placehold.co/1200x1200"
          alt="Profile"
          className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight text-white">
          Hi, I'm <span className="text-pink-500">Chris Patrick</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-300">
          I'm a full-stack developer specializing in creating exceptional
          digital experiences.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-pink-600 transform"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
