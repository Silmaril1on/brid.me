"use client";
import projectsData from "@/app/database/projectdata";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import ProjectsList from "./ProjectsList";

const HorizontalSlider = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0", "-40%"]);
  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] hidden md:flex md:flex-col"
    >
      <div className="sticky top-0 flex overflow-hidden pt-8">
        <div className="absolute top-0 w-full h-[450px] bg-primaryBg"></div>
        <motion.div style={{ x }} className="center flex-row pt-16">
          {projectsData.slice(0, 5).map((project) => {
            return (
              <ProjectsList key={project.id} {...project} project={project} />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalSlider;
