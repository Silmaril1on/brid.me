"use client";
import ArrowSvg from "@/app/components/buttons/ArrowSvg";
import GreenArrow from "@/app/components/buttons/GreenArrow";
import { primaryTextAnimation } from "@/app/framermotion/values";
import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  "Get your project requirements and goals",
  "Create brief and idea generation",
  "Design creation and development",
  "Communicating with you to obtain feedback and insights",
  "Corrections and refinements based on feedback",
  "Project Completion and Asset Delivery",
];

const WorkTitles = () => {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      variants={primaryTextAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full relative z-[3] center pb-5 text-sm xl:text-4xl flex flex-col xl:space-y-2"
    >
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="overflow-hidden flex items-start xl:center w-8/12 md:w-full *:duration-300"
          >
            <motion.div
              className="flex flex-col md:flex-row items-center justify-start w-full md:w-auto"
              variants={primaryTextAnimation}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(false)}
            >
              <div className="arrow-size xl:mr-2">
                {active === index ? <GreenArrow /> : <ArrowSvg />}
              </div>
              <h1 className="w-full text-center center text-xs xl:text-2xl hover:text-green duration-300 cursor-pointer">
                {item}
              </h1>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default WorkTitles;
