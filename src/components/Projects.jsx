// eslint-disable-next-line no-unused-vars
import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  function createProject(project, index) {
    function createCard(tech, index) {
      return (
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.75 }}
          key={index}
          className="mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
        >
          {tech}
        </motion.span>
      );
    }
    return (
      <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/4"
        >
          <a href={project.link} target="_blank">
            <img
              src={project.image}
              width={150}
              height={150}
              className="mb-6 rounded hover:border-[3px] border-gray-400 transition-all duration-100 ease-in-out"
              alt={project.title}
            />
          </a>
        </motion.div>
        <div className="w-full max-w-full lg:w-3/4">
          <motion.h6
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="mb-2 font-semibold"
          >
            {project.title}
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.75 }}
            className="mb-4 text-neutral-400"
          >
            {project.description}
          </motion.p>
          <div className="flex flex-wrap">
            {project.technologies.map(createCard)}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>{PROJECTS.map(createProject)}</div>
    </div>
  );
}

export default Projects;
