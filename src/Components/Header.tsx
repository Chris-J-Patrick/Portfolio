import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-gray-900 shadow-xl" : "bg-gray-800"
      } text-white py-4 transition-all duration-300`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-3xl font-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Link
            to="/"
            className="hover:text-teal-300 transition-colors duration-300"
          >
            Chris's Portfolio
          </Link>
        </motion.div>
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group"
            >
              <Link
                to={link.path}
                className="text-lg font-medium text-white transition-colors duration-300"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-300 group-hover:w-full transition-all duration-500"></span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-gray-900 py-4 overflow-hidden"
          >
            <nav className="container mx-auto flex flex-col space-y-4 px-4 sm:px-6 lg:px-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className="hover:text-teal-300 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
