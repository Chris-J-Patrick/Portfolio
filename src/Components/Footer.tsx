import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; 2024 Chris Patrick's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
