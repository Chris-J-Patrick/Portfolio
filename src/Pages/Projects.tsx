import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDatabase, faKey, faServer } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

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
    subtitle: "Auto detailing site",
    description:
      "This project is fully responsive, custom-designed and built with React, offering users a seamless way to book auto detailing services online.",
    imageUrl: "/AtdPic.png",
    demoLink: "https://detailing-website-react.vercel.app/",
    details:
      "This project is fully responsive, custom-designed and built with React, offering users a seamless way to book auto detailing services online.",
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
    title: "SchedulEase",
    subtitle: "SaaS Scheduling platform for businesses managing appointments.",
    description:
      "This platform provides a seamless appointment scheduling and managing experience, built using modern web technologies like React, Node.js, and MongoDB.",
    imageUrl: "/SchPic.jpg",
    demoLink: "https://service-scheduler.vercel.app",
    details:
      "This platform provides a seamless appointment scheduling experience, built using modern web technologies like React, Node.js, and MongoDB.",
    technologies: [
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "MongoDB", icon: faDatabase },
      { name: "Auth0", icon: faKey },
      { name: "RESTful APIs", icon: faServer },
      { name: "CSS3", icon: faCss3Alt },
      { name: "Stripe", icon: faStripe },
    ],
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="py-12 px-4 md:px-12 lg:px-24 bg-gray-600 text-white min-h-screen text-center">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-teal-400">
          My Projects
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A selection of projects that showcase my skills in full-stack
          development, utilizing the latest web technologies to create
          functional and elegant applications.
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-scroll"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-700 rounded-lg shadow-lg overflow-y-scroll py-0 w-full max-w-full  mx-auto my-0 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex flex-col lg:flex-row">
                <div className="lg:w-full ">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex bg-gray-600 text-white rounded-full p-2 mb-2 hover:bg-gray-500 transition duration-200"
                  >
                    Close
                  </button>
                  {selectedProject.demoLink ? (
                    <iframe
                      src={selectedProject.demoLink}
                      title="Live Demo"
                      className="w-full h-[90vh] rounded-lg shadow-lg"
                      frameBorder="0"
                    ></iframe>
                  ) : (
                    <div className="text-center h-fit max-w-full bg-gray-800 p-1 rounded-lg shadow-lg">
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <img
                            src="/SchPic.jpg"
                            alt={`${selectedProject.title} Service Page`}
                            className="w-full md:w-3/4 h-auto mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/homepage.png"
                            alt={`${selectedProject.title} Homepage`}
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/pricing.png"
                            alt={`${selectedProject.title} Availability Page`}
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img
                            src="/service.png"
                            alt={`${selectedProject.title} Service Page`}
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/datetime.png"
                            alt={`${selectedProject.title} Service Page`}
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/custinfo.png"
                            alt={`${selectedProject.title} Service Page`}
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/payment.png"
                            alt={`${selectedProject.title} Service Page`}
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/conf.png"
                            alt={`${selectedProject.title} Service Page`}
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/profile.png"
                            alt={`${selectedProject.title} Bookings`}
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/services.png"
                            alt={`${selectedProject.title} Bookings`}
                            className="w-full  md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/bookings.png"
                            alt={`${selectedProject.title} Bookings`}
                            className="w-full  md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/customers.png"
                            alt={`${selectedProject.title} Bookings`}
                            className="w-full  md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>

                        <SwiperSlide>
                          <img
                            src="/stats.png"
                            alt={`${selectedProject.title} Service Page`}
                            className="w-full  md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="/analytics.png"
                            alt={`${selectedProject.title} Service Page`}
                            className="w-full  md:w-3/4 mx-auto rounded-lg shadow-lg border border-gray-700"
                          />
                        </SwiperSlide>
                      </Swiper>

                      <p className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4 sm:mb-6">
                        Detailed Info about this Project
                      </p>
                      <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                        SchedulEase is a full-featured SaaS scheduling platform
                        designed to help businesses manage appointments,
                        customers, payments, notifications, and much more
                        efficiently. Here are the key features of the platform:
                      </p>
                      <ul className="text-left text-gray-300 list-disc space-y-3 sm:space-y-4 pl-4 sm:pl-6">
                        <li>
                          <span className="font-semibold text-teal-400">
                            Appointment Scheduling:
                          </span>{" "}
                          Easily manage appointments from customers.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Customer Management:
                          </span>{" "}
                          Robust database for managing customer details,
                          appointment history, and preferences.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Automated Notifications:
                          </span>{" "}
                          Sends automatic notifications and reminders for
                          upcoming appointments, cancellations, or reschedules.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Online Payments:
                          </span>{" "}
                          Accept secure online payments, simplifying the booking
                          process.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Real-time Availability:
                          </span>{" "}
                          Displays real-time availability for services.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Customizable Booking Forms:
                          </span>{" "}
                          Offers customizable forms for collecting specific
                          customer information.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Calendar Integration:
                          </span>{" "}
                          Sync with Google Calendar and other popular apps.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Admin Dashboard:
                          </span>{" "}
                          Centralized dashboard to track appointments, payments,
                          and customer data.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Security and Authentication:
                          </span>{" "}
                          Secure user authentication and data protection.
                        </li>
                        <li>
                          <span className="font-semibold text-teal-400">
                            Third-Party API Integration:
                          </span>{" "}
                          Integrates with third-party tools for additional
                          functionality.
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
