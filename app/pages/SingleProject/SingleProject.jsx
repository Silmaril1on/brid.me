"use client";
import { useEffect, useState } from "react";
import AboutProject from "./AboutProject";
import ContentProject from "./ContentProject";
import ButtonsProject from "./ButtonsProject";
import Loader from "@/app/components/Loader";
import { motion } from "framer-motion";

const SingleProject = ({ data }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-14">
      <AboutProject data={data} />
      {!active && (
        <div className="w-full flex justify-center my-[10%]">
          <Loader />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <ContentProject data={data} />
        <ButtonsProject data={data} />
      </motion.div>
    </section>
  );
};

export default SingleProject;
