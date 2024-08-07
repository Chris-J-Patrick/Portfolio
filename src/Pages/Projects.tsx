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
  videoUrl: string;
  details: string;
  technologies: Technology[];
}

const projects: Project[] = [
  {
    title: "Attention to Detail Auto",
    subtitle: "Auto detailing site with custom scheduler.",
    description:
      "This project includes a detailed scheduling system built with React and Node.js, allowing users to book auto detailing services online.",
    imageUrl: "https://via.placeholder.com/400x300",
    demoLink: "https://detailing-website-react.vercel.app/",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
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
    imageUrl: "https://via.placeholder.com/400x300",
    demoLink: "https://www.google.com",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
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
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <header className="container mx-auto py-12 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Chris Patrick</h1>
        <p className="text-lg mb-4">Full-Stack Developer</p>
        <p className="text-md max-w-2xl">
          With so many design portfolios online, making one that stands out is
          challenging. Here are some of my selected projects showcasing my
          skills and experience.
        </p>
      </header>
      <main className="container mx-auto py-12 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              imageUrl={project.imageUrl}
              demoLink={project.demoLink}
              videoUrl={project.videoUrl}
              details={project.details}
              technologies={project.technologies}
              onClick={() => setSelectedProject(project.demoLink)}
            />
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>
          Interested in working with me?{" "}
          <a href="mailto:youremail@example.com" className="underline">
            Get in touch!
          </a>
        </p>
      </footer>
      <AnimatePresence>
        {selectedProject && selectedProjectDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full h-full mx-auto flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full lg:w-1/3 p-8 flex flex-col justify-between h-full overflow-y-auto bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="self-end bg-gray-800 text-white rounded-full p-2 mb-4"
                >
                  Close
                </button>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-indigo-900">
                    {selectedProjectDetails.title}
                  </h2>
                  <h3 className="text-xl mb-4 text-indigo-700">
                    {selectedProjectDetails.subtitle}
                  </h3>
                  <div className="mb-6">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full rounded-lg shadow-lg"
                    >
                      <source
                        src={selectedProjectDetails.videoUrl}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="text-md text-gray-600 mb-6">
                    {selectedProjectDetails.details}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold mb-2">
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
                            className="text-indigo-600"
                          />
                          <span className="text-md text-gray-800">
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
