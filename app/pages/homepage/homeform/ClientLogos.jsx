"use client";
import { motion } from "framer-motion";
import { scrollAnimation } from "@/app/framermotion/values";
import Image from "next/image";
import logo1 from "@/app/assets/clientLogos/1.png";
import logo2 from "@/app/assets/clientLogos/2.png";
import logo3 from "@/app/assets/clientLogos/3.png";
import logo4 from "@/app/assets/clientLogos/4.png";
import logo5 from "@/app/assets/clientLogos/5.png";
import logo6 from "@/app/assets/clientLogos/6.png";
import logo7 from "@/app/assets/clientLogos/7.png";
import logo8 from "@/app/assets/clientLogos/8.png";
import logo9 from "@/app/assets/clientLogos/9.png";
import logo10 from "@/app/assets/clientLogos/10.png";

const clientImages = [
  logo6,
  logo1,
  logo2,
  logo3,
  logo4,
  logo7,
  logo10,
  logo9,
  logo8,
  logo5,
];

const ClientLogos = () => {
  return (
    <section className="overflow-hidden py-3 lg:py-7 bg-lineColor">
      <div className="logos flex flex-row w-max h-full items-center">
        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          animate="visible"
          className="flex items-center"
        >
          {clientImages.map((item, index) => {
            return (
              <Image
                priority
                quality={100}
                key={index}
                className="h-5 lg:h-[25px] mx-5 lg:mx-10 w-auto first:h-3 lg:last:h-10 lg:[&:nth-child(7)]:h-10"
                src={item}
                alt="clinets"
              />
            );
          })}
        </motion.div>
        <motion.div
          variants={scrollAnimation}
          initial="hidden"
          animate="visible"
          className="flex items-center"
        >
          {clientImages.map((item, index) => {
            return (
              <Image
                priority
                quality={100}
                key={index}
                className="h-5 lg:h-[25px] mx-5 lg:mx-10 w-auto first:h-3 lg:last:h-10 lg:[&:nth-child(7)]:h-10"
                src={item}
                alt="clinets"
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
