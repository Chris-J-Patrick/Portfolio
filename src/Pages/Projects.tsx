import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDatabase, faKey, faServer } from "@fortawesome/free-solid-svg-icons";

interface Technology {
  name: string;
  icon: IconDefinition;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  demoLink: string;
  details: string;
  technologies: Technology[];
}

const projects: Project[] = [
  {
    title: "Attention to Detail Auto",
    subtitle: "Auto detailing site with custom scheduler.",
    description:
      "This project includes a detailed scheduling system built with React and Node.js, allowing users to book auto detailing services online.",
    imageUrl: "/AtdPic.png",
    demoLink: "https://detailing-website-react.vercel.app/",
    details:
      "This project includes a detailed scheduling system built with React and Node.js, allowing users to book auto detailing services online.",
    technologies: [
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "MongoDB", icon: faDatabase },
      { name: "Auth0", icon: faKey },
      { name: "RESTful APIs", icon: faServer },
      { name: "CSS3", icon: faCss3Alt },
    ],
  },
  {
    title: "Appointment Scheduler",
    subtitle: "Scheduling platform for managing appointments.",
    description:
      "This platform provides a seamless appointment scheduling experience, built using modern web technologies like React, Node.js, and MongoDB.",
    imageUrl: "/SchPic.png",
    demoLink: "https://www.google.com",
    details:
      "This platform provides a seamless appointment scheduling experience, built using modern web technologies like React, Node.js, and MongoDB.",
    technologies: [
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "MongoDB", icon: faDatabase },
      { name: "Auth0", icon: faKey },
      { name: "RESTful APIs", icon: faServer },
      { name: "CSS3", icon: faCss3Alt },
    ],
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selectedProjectDetails = projects.find(
    (project) => project.demoLink === selectedProject
  );

  return (
    <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24 bg-gray-800 text-white min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-teal-400">
          My Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A selection of projects that showcase my skills in full-stack
          development, utilizing the latest web technologies to create
          functional and elegant applications.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              imageUrl={project.imageUrl}
              demoLink={project.demoLink}
              details={project.details}
              technologies={project.technologies}
              onClick={() => setSelectedProject(project.demoLink)}
            />
          ))}
        </div>
      </main>
      <AnimatePresence>
        {selectedProject && selectedProjectDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-700 rounded-lg shadow-lg overflow-hidden w-full h-full mx-auto flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full lg:w-1/3 p-8 flex flex-col justify-between h-full overflow-y-auto bg-gray-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="self-end bg-gray-600 text-white rounded-full p-2 mb-4 hover:bg-gray-500 transition duration-200"
                >
                  Close
                </button>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-teal-300">
                    {selectedProjectDetails.title}
                  </h2>
                  <h3 className="text-xl mb-4 text-teal-200">
                    {selectedProjectDetails.subtitle}
                  </h3>
                  <p className="text-md text-gray-300 mb-6 leading-relaxed">
                    {selectedProjectDetails.details}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold mb-2 text-teal-300">
                      Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {selectedProjectDetails.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center space-x-2 mb-2"
                        >
                          <FontAwesomeIcon
                            icon={tech.icon}
                            size="2x"
                            className="text-teal-400"
                          />
                          <span className="text-md text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3 h-full">
                <iframe
                  src={selectedProject}
                  title="Live Demo"
                  className="w-full h-full"
                  frameBorder="0"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
