import React from "react";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const SSkills = () => {
  return (
    <section
      className="bg-white py-4 rounded-xl px-6"
      id="skills"
      style={{ scrollMarginTop: "100px" }}
    >
      <p className="text-center mb-3">Skills</p>
      <h2 className="text-dark text-xl font-bold uppercase text-center">
        Lets Explore My Skills
      </h2>
      <div className="grid py-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="border border-offWhite p-4 rounded-xl text-center">
          <div className="text-red-500">
            <FaHtml5 className="mx-auto" size={100} />
          </div>
          <p className="text-dark font-bold text-2xl">HTML</p>
        </div>
        <div className="border border-offWhite p-4 rounded-xl text-center">
          <div className="text-blue-500">
            <FaCss3 className="mx-auto" size={100} />
          </div>
          <p className="text-dark font-bold text-2xl">CSS</p>
        </div>
        <div className="border border-offWhite p-4 rounded-xl text-center">
          <div className="text-yellow-500">
            <FaJs className="mx-auto" size={100} />
          </div>
          <p className="text-dark font-bold text-2xl">JavaScript</p>
        </div>
        <div className="border border-offWhite p-4 rounded-xl text-center">
          <div className="text-black">
            <RiNextjsFill className="mx-auto" size={100} />
          </div>
          <p className="text-dark font-bold text-2xl">Next Js</p>
        </div>
        <div className="border border-offWhite p-4 rounded-xl text-center">
          <div className="text-blue-400">
            <FaReact className="mx-auto" size={100} />
          </div>
          <p className="text-dark font-bold text-2xl">React Js</p>
        </div>
        <div className="border border-offWhite p-4 rounded-xl text-center">
          <div className="text-cyan-500">
            <RiTailwindCssFill className="mx-auto" size={100} />
          </div>
          <p className="text-dark font-bold text-2xl">Tailwind CSS</p>
        </div>
        <div className="border border-offWhite p-4 rounded-xl text-center">
          <div className="text-red-500">
            <FaGitAlt className="mx-auto" size={100} />
          </div>
          <p className="text-dark font-bold text-2xl">Git</p>
        </div>
        <div className="border border-offWhite p-4 rounded-xl text-center">
          <div className="text-black">
            <FaGithub className="mx-auto" size={100} />
          </div>
          <p className="text-dark font-bold text-2xl">GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default SSkills;
