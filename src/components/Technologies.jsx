// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Postgres from "../assets/SVG/Postgres.svg";
import Tailwind from "../assets/SVG/Tailwind.svg";
import Cpp from "../assets/SVG/C++.svg";
import Bootstrap from "../assets/SVG/Bootstrap.svg";
import Hacking from "../assets/SVG/Hacking.png";
import Java from "../assets/SVG/Java.svg";
import AWS from "../assets/SVG/AWS.svg";
import MYSQL from "../assets/SVG/MYSQL.svg";
import Python from "../assets/SVG/Python.svg";
import Unity from "../assets/SVG/Unity.png";
import Swift from "../assets/SVG/Swift.svg";
import RaspberryPi from "../assets/SVG/RaspberryPi.svg";
import { motion } from "framer-motion";

function Technologies() {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="bordeer-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 "
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4  "
        >
          <RiReactjsLine className="text-7xl text-cyan-400 w-[75px] h-auto" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiMongodb className="text-7xl text-green-400 w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-700 w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <FaNodeJs className="text-7xl text-green-400 w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-yellow-300"
        >
          <SiJavascript className="text-7xl text-black w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Postgres} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white"
        >
          <img src={Tailwind} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <img src={RaspberryPi} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <img src={Bootstrap} className="w-[75px] h-auto" />
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 py-4 "
      >
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <img src={Cpp} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <img src={Hacking} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <img src={Java} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white "
        >
          <img src={AWS} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4  "
        >
          <img src={MYSQL} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <img src={Python} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-white "
        >
          <img src={Unity} className="w-[75px] h-auto" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <img src={Swift} className="w-[75px] h-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
