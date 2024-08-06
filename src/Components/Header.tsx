import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="text-3xl font-bold">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            MyPortfolio
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none bg-indigo-600"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-4">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="hover:text-gray-200 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="hover:text-gray-200 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
