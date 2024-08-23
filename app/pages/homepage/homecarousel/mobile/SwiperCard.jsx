"use client";
import { motion } from "framer-motion";
import projectsData from "@/app/database/projectdata";
import ArrowSvg from "@/app/components/buttons/ArrowSvg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SwiperCard = ({ project, animation }) => {
  const router = useRouter();
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };

  return (
    <>
      {projectsData.map((proj, index) => {
        return (
          <motion.div
            key={index}
            animate={{
              scale: project === index ? 0.95 : 0.95,
              opacity: project === index ? 1 : 0.7,
            }}
            transition={animation}
            onClick={() => router.push(`/work/${proj.name}`)}
            className="w-[300px] h-full"
          >
            <article className="flex flex-row h-9 mb-3 w-full items-center relative border-bottom">
              <div className="arrow-size">
                <ArrowSvg />
              </div>
              <h1 className="w-full text-lg pl-3">
                {truncateString(proj.name.toLocaleString(), 20)}
              </h1>
            </article>
            <div className="overflow-hidden  h-60 w-full">
              <Image
                className="duration-300 hover:scale-110 h-full w-full object-cover pointer-events-none"
                src={proj.image}
                alt="horizon_image"
                quality={100}
                width={400}
              />
            </div>
            <article className="w-full flex flex-col mt-2">
              <div className="flex flex-wrap items-center border-t border-b border-lineColor py-2 h-20 overflow-hidden">
                {proj.scope.map((item, index) => {
                  return (
                    <h1 key={index} className="text-[14px] mr-3">
                      {item} \
                    </h1>
                  );
                })}
              </div>
            </article>
          </motion.div>
        );
      })}
    </>
  );
};

export default SwiperCard;
