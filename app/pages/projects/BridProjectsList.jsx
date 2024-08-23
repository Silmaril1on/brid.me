"use client";
import projectsData from "@/app/database/projectdata";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerSlideUp } from "@/app/framermotion/values";
import ArrowSvg from "@/app/components/buttons/ArrowSvg";

const BridProjectsList = () => {
  return (
    <div className="pt-40">
      <div className="grid grid-col-1 md:grid-cols-3 hd:grid-cols-4 gap-4 p-5">
        {projectsData.map((project) => {
          return (
            <Link
              key={project.id}
              href={`/work/${project.name}`}
              className="even:mb-[20%] even:mt-[20%]"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerSlideUp}
                viewport={{ once: true }}
                className="w-full *:duration-300 relative duration-500 flex flex-col h-[400px] lg:h-full"
              >
                <article className="flex flex-row w-full border-b border-lineColor mb-2">
                  <div className="flex flex-row w-full">
                    <div className="arrow-size">
                      <ArrowSvg />
                    </div>
                    <h1 className="text-base lg:text-2xl center justify-start w-full ml-2">
                      {project.name}
                    </h1>
                  </div>
                </article>

                <div className="w-full h-80 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover hover:scale-110 duration-300"
                    src={project.image}
                    alt="horizon"
                    quality={80}
                    width={600}
                  />
                </div>

                <article className="flex w-full flex-row flex-wrap my-2 border-style">
                  {project.scope.map((item, index) => {
                    return (
                      <h1 key={index} className="mr-2 text-sm">
                        {item} \
                      </h1>
                    );
                  })}
                </article>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BridProjectsList;
