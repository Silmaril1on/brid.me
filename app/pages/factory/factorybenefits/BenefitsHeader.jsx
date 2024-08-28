"use client";
import { headlineAnimation } from "@/app/framermotion/values";
import { motion } from "framer-motion";

const BenefitsHeader = () => {
  return (
    <div className="w-full md:w-[45%] overflow-hidden flex flex-row items-end lg:items-center justify-between lg:justify-center relative my-7 lg:my-0 border-style py-5 lg:py-0 lg:border-none">
      <div className="overflow-hidden ">
        <motion.div
          variants={headlineAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:border-style w-full *:text-6xl lg:*:text-[130px] *:text-center *:overflow-hidden text-white pl-3 lg:py-14"
        >
          <div>
            <motion.h1 variants={headlineAnimation}>why it</motion.h1>
          </div>
          <div>
            <motion.h1 variants={headlineAnimation}>works</motion.h1>
          </div>
        </motion.div>
      </div>
      <div className="absolute lg:top-10 right-3 bottom-2 lg:left-5 text-green text-sm lg:text-2xl ">
        <h1>benefits</h1>
      </div>
    </div>
  );
};

export default BenefitsHeader;
