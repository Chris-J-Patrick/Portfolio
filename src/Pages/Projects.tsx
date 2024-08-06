import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Attention to Detail Auto",
      description: "Auto detailing site with custom scheduler.",
      imageUrl: "https://via.placeholder.com/400x300",
      demoLink: "https://demo.attentiontodetailauto.com",
      liveLink: "https://live.attentiontodetailauto.com",
      details:
        "This project includes a detailed scheduling system built with React and Node.js, allowing users to book auto detailing services online.",
    },
    {
      title: "Appointment Scheduler",
      description: "Scheduling platform for managing appointments.",
      imageUrl: "https://via.placeholder.com/400x300",
      demoLink: "https://demo.appointmentscheduler.com",
      liveLink: "https://live.appointmentscheduler.com",
      details:
        "This platform provides a seamless appointment scheduling experience, built using modern web technologies like React, Node.js, and MongoDB.",
    },
  ];

  return (
    <div className="container mx-auto py-20 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-heading mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            demoLink={project.demoLink}
            liveLink={project.liveLink}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
