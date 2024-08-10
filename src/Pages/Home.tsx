import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  // Define the stagger container
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative h-[90vh] w-full bg-gradient-to-r from-blue-900 to-blue-700 flex my-0 items-center justify-center text-center">
      <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.img
          src="/Headshot.jpg"
          alt="Profile"
          className="rounded-full md:w-48 md:h-48 mb-4 border-4 border-white shadow-md object-cover"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight text-white"
          variants={fadeIn}
        >
          Hi, I'm <span className="text-teal-300">Chris Patrick</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200"
          variants={fadeIn}
        >
          I'm a full-stack developer specializing in creating exceptional
          digital experiences.
        </motion.p>

        <motion.div variants={fadeIn} style={{ marginTop: "2rem" }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-teal-600 transform"
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
