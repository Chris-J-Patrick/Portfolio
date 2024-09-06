import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
  faHtml5,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "@react-spring/web";

const skills = [
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
    icon: faNodeJs,
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
    name: "JavaScript",
    icon: faJsSquare,
    level: 90,
    description:
      "Highly proficient in JavaScript for front-end and back-end development.",
  },
  {
    name: "MongoDB/Mongoose",
    icon: faDatabase,
    level: 85,
    description:
      "Experienced in working with MongoDB and Mongoose for database management.",
  },
  {
    name: "RESTful APIs",
    icon: faCode,
    level: 80,
    description: "Proficient in designing and consuming RESTful APIs.",
  },
  {
    name: "CSS3",
    icon: faCss3Alt,
    level: 90,
    description: "Proficient in creating responsive designs with CSS3.",
  },
  {
    name: "HTML5",
    icon: faHtml5,
    level: 95,
    description: "Expert in structuring web content with HTML5.",
  },

  {
    name: "React Bootstrap",
    icon: faCheck,
    level: 80,
    description: "Using Bootstrap components in React.",
  },
  {
    name: "Vite",
    icon: faCheck,
    level: 70,
    description: "Building projects with Vite.",
  },
  {
    name: "Tailwind CSS",
    icon: faCss3Alt,
    level: 85,
    description: "Using Tailwind CSS for styling.",
  },
  {
    name: "Auth0",
    icon: faCheck,
    level: 75,
    description: "Implementing user authentication with Auth0.",
  },
  {
    name: "Version Control (Git)",
    icon: faCheck,
    level: 90,
    description: "Managing code with Git.",
  },
];

const SkillBar: React.FC<{ name: string; level: number }> = ({
  name,
  level,
}) => {
  const props = useSpring({ width: `${level}%`, from: { width: "0%" } });
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-gray-200">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <animated.div
          style={props}
          className="bg-blue-400 h-4 rounded-full"
        ></animated.div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-gray-600 text-white min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 mb-8 md:mb-0 text-center">
          <img
            src="/Headshot.jpg"
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mb-4 border-4 border-white shadow-md object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg mb-6 leading-relaxed">
            I am a passionate developer with experience in creating web
            applications using modern technologies. My focus is on delivering
            high-quality code and exceptional user experiences.
          </p>
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            {skills.slice(0, 8).map((skill) => (
              <div key={skill.name} className="text-center">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-5xl text-blue-400 mb-4"
                />
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">
            Proficiency
          </h2>
          {skills.slice(0, 8).map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
