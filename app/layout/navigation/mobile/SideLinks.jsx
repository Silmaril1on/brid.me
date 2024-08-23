"use client";
import { staggerOpacity200 } from "@/app/framermotion/values";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    name: "services",
    link: "/#services",
  },
  {
    name: "work",
    link: "/work",
  },
  {
    name: "awards",
    link: "/#awards",
  },
  {
    name: "contact",
    link: "/#footer",
  },
  {
    name: "factory",
    link: "/factory",
  },
];

const SideLinks = ({ setIsActive }) => {
  return (
    <aside className="fixed w-full h-screen top-12 left-0 z-10 bg-black center space-y-5 flex-col lg:hidden">
      <motion.div
        variants={staggerOpacity200}
        initial="hidden"
        animate="visible"
        className="center flex-col w-full space-y-2 text-5xl *:w-full *:text-center hover:*:text-whiteText *:duration-300"
      >
        {links.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={staggerOpacity200}
              onClick={() => setIsActive(false)}
              className="last:text-green"
            >
              <Link href={item.link}>{item.name}</Link>
            </motion.div>
          );
        })}
      </motion.div>
    </aside>
  );
};

export default SideLinks;
