"use client";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import projectsData from "@/app/database/projectdata";
import SwiperCard from "./SwiperCard";

const DRAG_BUFFER = 20;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const MobileSwiper = () => {
  const [project, setProject] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && project < projectsData.length - 1) {
      setProject((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && project > 0) {
      setProject((pv) => pv - 1);
    }
  };

  return (
    <div className="w-auto center">
      <section className="block md:hidden w-[370px] overflow-hidden relative">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${project * 300}px`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex items-center cursor-grab active:cursor-grabbing w-max"
        >
          <SwiperCard project={project} animation={SPRING_OPTIONS} />
        </motion.div>
      </section>
    </div>
  );
};

export default MobileSwiper;
