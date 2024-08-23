"use client";
import arrow from "../../assets/arrow.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ArrowSvg = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={arrow}
        alt="arrow"
        priority
        className="max-w-9 max-h-9 w-full h-full p-1"
      />
    </motion.div>
  );
};

export default ArrowSvg;
