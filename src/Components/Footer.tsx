import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white p-4 text-center mt-8">
      <div className="container mx-auto">
        <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-accent transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
