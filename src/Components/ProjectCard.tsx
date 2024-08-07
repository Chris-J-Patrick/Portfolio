import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  demoLink: string;
  videoUrl: string;
  details: string;
  technologies: { name: string; icon: IconDefinition }[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  technologies,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
          <h4 className="text-xl mb-2 text-indigo-700">{subtitle}</h4>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={tech.icon}
                  size="2x"
                  className="text-indigo-600"
                />
                <span className="text-md text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
