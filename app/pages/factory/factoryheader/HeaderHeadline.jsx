"use client";
import TextAnimation from "@/app/components/TextAnimation";
import { primaryTextAnimation } from "@/app/framermotion/values";
import { motion } from "framer-motion";
import DownloadFile from "./DownloadFile";

const HeaderHeadline = () => {
  return (
    <article className="flex justify-between items-end flex-col w-full mt-20 grow bg-black">
      <DownloadFile />
      <div className="w-full flex md:flex-row flex-col-reverse items-end justify-between relative h-full">
        <div className="w-full mb-10 lg:mb-0">
          <motion.div
            variants={primaryTextAnimation}
            initial="hidden"
            whileInView="visible"
            className="pl-3 xl:pl-5 flex flex-col w-full justify-end text-[50px] lg:text-[75px] xl:text-[80px] 2xl:text-[90px]  lg:h-52 h-full lg:mb-5"
          >
            <div className="overflow-hidden">
              <motion.h1
                variants={primaryTextAnimation}
                className="text-green leading-[55px] lg:leading-[90px]"
              >
                monthly design service
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={primaryTextAnimation}
                className="text-grayText leading-[55px] lg:leading-[90px]"
              >
                for your business
              </motion.h1>
            </div>
          </motion.div>
        </div>
        <TextAnimation
          text="don't follow your old rules. make your own"
          className="mt-10 lg:mt-0 text-sm w-56 pr-3 lg:pr-0 lg:pl-0 lg:w-90 md:absolute bottom-5 right-7 text-end hidden lg:block"
        />
      </div>
    </article>
  );
};

export default HeaderHeadline;
