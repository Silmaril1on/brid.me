"use client";
import { primaryTextAnimation } from "@/app/framermotion/values";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderInfo = () => {
  return (
    <article className="*:text-xs md:*:text-2xl flex flex-col xl:flex-row md:h-44 space-y-10 justify-between items-end pl-3 xl:pl-5 py-7 w-full bg-primaryBg overflow-hidden">
      <motion.div
        variants={primaryTextAnimation}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-auto lg:*:leading-6 overflow-hidden"
      >
        <motion.p variants={primaryTextAnimation}>
          our experienced and creative team is
        </motion.p>
        <motion.p variants={primaryTextAnimation}>
          dedicated to meeting all your design
        </motion.p>
        <motion.p variants={primaryTextAnimation}>
          requirements and justifying your trust
        </motion.p>
        <motion.p variants={primaryTextAnimation}>
          in our knowledge and experience.
        </motion.p>
      </motion.div>
      <Link href="#bottom" className="mt-2">
        <h1 className="w-90 uppercase relative text-green underline hover:text-whiteText duration-300 text-[15px] lg:text-[20px] pr-5">
          get started
        </h1>
      </Link>
    </article>
  );
};

export default HeaderInfo;
