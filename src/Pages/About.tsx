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
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-gray-700 text-white min-h-screen text-center">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-blue-500">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="mb-8 md:mb-0 text-center">
          <img
            src="/Headshot.jpg"
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full mb-6 border-4 border-blue-500 shadow-lg object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg mb-8 leading-relaxed text-gray-300">
            I'm currently working in sales, but my real passion is programming
            and problem-solving. I absolutely love diving into code and finding
            creative solutions to challenges. It's what really gets me excited
            every day.
          </p>
          <h2 className="text-4xl font-semibold mb-6 text-blue-400">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
            {skills.map((skill) => (
              <div key={skill.name} className="text-center">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-6xl text-blue-400 mb-6"
                />
                <p className="font-bold text-xl text-white">{skill.name}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          <h2 className="text-4xl font-semibold mb-6 text-blue-400">
            Proficiency
          </h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
