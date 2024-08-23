import { motion } from "framer-motion";
import { rotateX } from "@/app/framermotion/values";
import Circle from "@/app/components/Circle";
import Image from "next/image";

const BenefitsInfoDesktop = ({ data, active, setActive }) => {
  return (
    <article className="hidden md:flex flex-col md:flex-row items-center w-[65%] h-full xl:overflow-hidden">
      <motion.div
        variants={rotateX}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col w-full h-auto center relative "
      >
        {data.map((item, index) => {
          return (
            <motion.div
              onMouseEnter={() => setActive(index)}
              key={index}
              variants={rotateX}
              className="flex flex-col md:flex-row w-full p-2"
            >
              <div className="flex flex-col justify-end w-full md:w-[70%] pl-8 relative z-5 ">
                <h1
                  className={
                    active === index
                      ? "text-sm xl:text-3xl w-full text-green duration-300"
                      : "text-sm xl:text-3xl w-full"
                  }
                >
                  {item.name}
                </h1>
                <p className="py-3 uppercase text-[8px] xl:text-base">
                  {item.info}
                </p>
              </div>
            </motion.div>
          );
        })}
        <ServiceNumbers data={data[active]} />
      </motion.div>
    </article>
  );
};

const ServiceNumbers = ({ data }) => {
  return (
    <div className="w-[200px] xl:w-[400px] center h-[200px] xl:h-[400px] bg-contain xl:absolute right-10 top-0">
      <Circle />
      <Image
        className="h-32 w-auto xl:h-64 p-2 object-cover"
        src={data.number}
        alt="numbers"
        priority
        quality={100}
      />
    </div>
  );
};

export default BenefitsInfoDesktop;
