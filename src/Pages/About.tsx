import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-6 md:px-12 lg:px-24">
      <h1 className="text-5xl font-heading mb-8 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 mb-8 md:mb-0 text-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <p className="text-lg mb-6">
            I am a passionate developer with experience in creating web
            applications using modern technologies. My focus is on delivering
            high-quality code and exceptional user experiences.
          </p>
          <h2 className="text-3xl font-heading mb-4">Skills</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/4 text-center mb-4">
              <FontAwesomeIcon
                icon={faReact}
                className="text-4xl text-accent mb-2"
              />
              <p>React</p>
            </div>
            <div className="w-1/2 md:w-1/4 text-center mb-4">
              <FontAwesomeIcon
                icon={faCode}
                className="text-4xl text-accent mb-2"
              />
              <p>TypeScript</p>
            </div>
            <div className="w-1/2 md:w-1/4 text-center mb-4">
              <FontAwesomeIcon
                icon={faNodeJs}
                className="text-4xl text-accent mb-2"
              />
              <p>Node.js</p>
            </div>
            <div className="w-1/2 md:w-1/4 text-center mb-4">
              <FontAwesomeIcon
                icon={faCode}
                className="text-4xl text-accent mb-2"
              />
              <p>GraphQL</p>
            </div>
            <div className="w-1/2 md:w-1/4 text-center mb-4">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="text-4xl text-accent mb-2"
              />
              <p>CSS3</p>
            </div>
            <div className="w-1/2 md:w-1/4 text-center mb-4">
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-4xl text-accent mb-2"
              />
              <p>HTML5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
