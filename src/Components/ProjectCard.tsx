import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoLink: string;
  liveLink: string;
  details: string; // Additional details about the project
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  demoLink,
  liveLink,
  details,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-600 mt-2">{details}</p>
        <div className="mt-4 flex space-x-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-blue-600"
          >
            See Demo
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-green-600"
          >
            See Live Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
