import React from "react";
import arrow from "@/app/assets/greenarrow.png";
import { motion } from "framer-motion";
import Image from "next/image";

function GreenArrow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        className="max-w-9 max-h-9 w-full h-full"
        src={arrow}
        alt="arrow"
        priority
        quality={100}
      />
    </motion.div>
  );
}

export default GreenArrow;
