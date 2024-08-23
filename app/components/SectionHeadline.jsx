"use client";
import { motion } from "framer-motion";
import { headlineAnimation } from "../framermotion/values";

const SectionHeadline = ({ text, className }) => {
  return (
    <article className={className} style={{ overflow: "hidden" }}>
      <motion.div
        variants={headlineAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-3 lg:px-4 lg:py-3"
      >
        <motion.h1
          className="text-6xl md:text-8xl lg:text-[150px] lg:leading-[130px] text-white"
          variants={headlineAnimation}
        >
          {text}
        </motion.h1>
      </motion.div>
    </article>
  );
};

export default SectionHeadline;
