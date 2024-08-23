"use client";
import servicesData from "@/app/database/servicesdata";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ServicePhotos from "./ServicePhotos";
import ServiceTitles from "./ServiceTitles";
import ServiceLines from "./ServiceLines";
import { primaryTextAnimation } from "@/app/framermotion/values";

const ServiceList = () => {
  const [serviceHover, setServiceHover] = useState(false);
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const top = useTransform(ySpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(xSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const onHover = (index) => {
    setServiceHover(index);
  };

  return (
    <motion.div
      variants={primaryTextAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden py-14"
    >
      {servicesData.map((item) => {
        return (
          <motion.div key={item.id} variants={primaryTextAnimation}>
            <motion.div
              ref={ref}
              initial="hidden"
              whileHover="whileHover"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => onHover(item.id)}
              onMouseLeave={() => setServiceHover(false)}
              className="group relative flex flex-row items-center justify-between transition-colors duration-300 my-1 xl:my-2 "
            >
              <ServiceLines item={item} serviceHover={serviceHover} />
              <div className="w-full">
                <ServiceTitles item={item} />
                <ServicePhotos item={item} left={left} top={top} />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServiceList;
