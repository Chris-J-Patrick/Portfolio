import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home: React.FC = () => {
  return (
    <main className="relative h-[84vh] w-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        role="main"
        aria-label="Homepage"
      >
        <motion.img
          src="/Headshot.jpg"
          alt="Chris Patrick smiling"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-6 border-4 border-white shadow-lg object-cover"
          variants={fadeInUp}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3 text-white"
          variants={fadeInUp}
        >
          Hi, I'm <span className="text-teal-300">Chris Patrick</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-10 mx-auto text-gray-300"
          variants={fadeInUp}
        >
          I'm a full-stack developer specializing in creating exceptional
          digital experiences.
        </motion.p>

        <motion.div className="flex space-x-6" variants={fadeInUp}>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-teal-600"
            >
              View My Skills
            </motion.button>
          </Link>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-gray-400"
            >
              View My Projects
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Home;
