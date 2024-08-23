"use client";
import { motion } from "framer-motion";
import { primaryTextAnimation } from "../framermotion/values";

const TextAnimation = ({ text, className, onClick }) => {
  return (
    <motion.div
      variants={primaryTextAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden"
      onClick={onClick}
    >
      <motion.h1 className={className} variants={primaryTextAnimation}>
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default TextAnimation;
