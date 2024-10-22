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
  details: string;
  technologies: { name: string; icon: IconDefinition }[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  demoLink,
  technologies,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.97 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl cursor-pointer flex flex-col"
    >
      {demoLink ? (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <motion.h3
                className="text-3xl font-bold mb-2 text-gray-900"
                whileHover={{ color: "#1e40af" }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>
              <h4 className="text-lg font-medium mb-3 text-blue-600">
                {subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.1, translateX: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FontAwesomeIcon
                      icon={tech.icon}
                      size="2x"
                      className="text-blue-600"
                    />
                    <span className="text-md text-gray-800">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div onClick={onClick}>
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <motion.h3
                className="text-3xl font-bold mb-2 text-gray-900"
                whileHover={{ color: "#1e40af" }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>
              <h4 className="text-lg font-medium mb-3 text-blue-600">
                {subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.1, translateX: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FontAwesomeIcon
                      icon={tech.icon}
                      size="2x"
                      className="text-blue-600"
                    />
                    <span className="text-md text-gray-800">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
