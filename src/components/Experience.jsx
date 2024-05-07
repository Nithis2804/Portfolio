// eslint-disable-next-line no-unused-vars
import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  function createTech(tech, index) {
    return (
      <motion.span
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 150 }}
        transition={{ duration: 2 }}
        key={index}
        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1
      text-sm font-medium text-purple-800"
      >
        {tech}
      </motion.span>
    );
  }
  function createExperince(item, index) {
    return (
      <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/4"
        >
          <p className="mb-2 text-sm text-neutral-400">{item.year}</p>
        </motion.div>
        <div className="w-full max-w-xl lg:w-3/4">
          <motion.h6
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="mb-2 font-semibold"
          >
            {item.role} -{" "}
            <span className="text-sm text-purple-100">{item.company}</span>
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 150 }}
            transition={{ duration: 1.75 }}
            className="mb-4 text-neutral-400"
          >
            {item.description}
          </motion.p>
          {item.technologies.map(createTech)}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="bordeer-b border-neutral-800 pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Experience
        </motion.h2>
        <div>{EXPERIENCES.map(createExperince)}</div>
      </div>
    </div>
  );
}

export default Experience;
