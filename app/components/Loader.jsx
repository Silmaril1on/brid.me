"use client";
import { motion } from "framer-motion";

const loaderVariant = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: [1, 0.2, 1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeIn",
    },
  },
};
const loaderVariant1 = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: [1, 0.2, 1, 1],
    transition: {
      duration: 1.5,
      delay: 0.1,
      repeat: Infinity,
      ease: "easeIn",
    },
  },
};
const loaderVariant2 = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: [1, 0.2, 1, 1],
    transition: {
      duration: 1.5,
      delay: 0.2,
      repeat: Infinity,
      ease: "easeIn",
    },
  },
};

const Loader = () => {
  return (
    <motion.section
      variants={loaderVariant1}
      initial="hidden"
      animate="visible"
      className="flex flex-row space-x-1 lg:space-x-3"
    >
      <motion.div
        variants={loaderVariant}
        className="w-1 lg:w-2 h-4 lg:h-10 bg-green"
      ></motion.div>
      <motion.div
        variants={loaderVariant1}
        className="w-1 lg:w-2 h-4 lg:h-10 bg-green"
      ></motion.div>
      <motion.div
        variants={loaderVariant2}
        className="w-1 lg:w-2 h-4 lg:h-10 bg-green"
      ></motion.div>
    </motion.section>
  );
};

export default Loader;
