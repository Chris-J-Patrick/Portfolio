import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faMicroscope,
} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "@react-spring/web";

const skills = [
  {
    name: "RESTful APIs",
    icon: faCode,
    level: 90,
    description: "Proficient in designing and consuming RESTful APIs.",
  },
  {
    name: "React",
    icon: faReact,
    level: 90,
    description:
      "Experienced in building dynamic web applications using React.",
  },
  {
    name: "TypeScript",
    icon: faCode,
    level: 80,
    description:
      "Proficient in TypeScript for type-safe JavaScript development.",
  },
  {
    name: "Express",
    icon: faCode,
    level: 85,
    description: "Building server-side applications with Express.",
  },
  {
    name: "Node.js",
    icon: faNodeJs,
    level: 85,
    description: "Skilled in building server-side applications with Node.js.",
  },
  {
    name: "MongoDB/Mongoose",
    icon: faDatabase,
    level: 90,
    description:
      "Experienced in working with MongoDB and Mongoose for database management.",
  },
  {
    name: "PostgreSQL",
    icon: faDatabase,
    level: 70,
    description: "Honing PostgreSQL skill",
  },
  {
    name: "Version Control (Git)",
    icon: faGitAlt,
    level: 90,
    description: "Managing code with Git.",
  },
  {
    name: "Postman",
    icon: faMicroscope,
    level: 95,
    description: "Proficient in API testing with Postman",
  },
  {
    name: "JavaScript",
    icon: faJsSquare,
    level: 90,
    description:
      "Highly proficient in JavaScript for front-end and back-end development.",
  },

  {
    name: "CSS3",
    icon: faCss3Alt,
    level: 95,
    description: "Proficient in creating responsive designs with CSS3.",
  },
  {
    name: "HTML5",
    icon: faHtml5,
    level: 95,
    description: "Expert in structuring web content with HTML5.",
  },
  {
    name: "Vite",
    icon: faCode,
    level: 95,
    description: "Building projects with Vite.",
  },
  {
    name: "Tailwind CSS",
    icon: faCss3Alt,
    level: 90,
    description: "Using Tailwind CSS for styling.",
  },
  {
    name: "Auth0",
    icon: faCode,
    level: 85,
    description: "Implementing user authentication with Auth0.",
  },
];

const SkillBar: React.FC<{ name: string; level: number }> = ({
  name,
  level,
}) => {
  const props = useSpring({ width: `${level}%`, from: { width: "0%" } });
  const skillColor =
    "bg-gradient-to-r from-green-600 via-green-400 to-green-200";

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1 text-gray-200">
        <span className="text-lg">{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <animated.div
          style={props}
          className={`${skillColor} h-4 rounded-full`}
        ></animated.div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="py-12 bg-gray-700 text-white min-h-screen">
      <div className="container mx-auto flex mb-0 flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex-shrink-0">
          <img
            src="/Headshot.jpg"
            alt="Profile"
            className="w-32 h-44 rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
        </div>

        <div className="flex-grow text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-3 text-blue-500">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">
            I'm currently working in sales, but my real passion is programming
            and problem-solving. I love diving into code and finding creative
            solutions to challenges. It's what gets me excited every day.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-200">
            I've developed strong skills in full-stack development, using
            technologies like{" "}
            <span className="text-blue-400">React, Node.js, and MongoDB.</span>{" "}
            I enjoy creating efficient applications that solve problems and
            deliver great user experiences. Coding is my craft, and I'm always
            eager to learn and push my limits with every new project.
          </p>
        </div>
      </div>

      <div className=" max-w-4xl mx-auto">
        <h2 className="text-5xl font-semibold mb-6 text-blue-400 text-left mt-10">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-4xl text-blue-400 mb-4"
              />
              <p className="font-bold text-xl text-white">{skill.name}</p>
              <p className="text-sm text-gray-200 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-5xl font-semibold mt-10 mb-4 text-blue-400 text-left">
          Proficiency
        </h2>
        <div className="space-y-4 max-w-full mx-auto bg-gray-800 p-8 rounded-md">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
