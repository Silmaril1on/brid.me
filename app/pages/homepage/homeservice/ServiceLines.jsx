import { primaryTextAnimation } from "@/app/framermotion/values";
import { motion } from "framer-motion";

const ServiceLines = ({ item, serviceHover }) => {
  return (
    <motion.div className="w-6 border-lineColor xl:w-20 flex flex-col overflow-hidden">
      <div
        key={item.id}
        className="h-7 xl:h-14 w-full pt-1 xl:pt-8 *:duration-300 *:text-sm"
      >
        <motion.h1
          className={
            serviceHover === item.id
              ? "border-b border-b-green w-3 md:w-6 text-green"
              : " border-b border-b-lineColor w-4 md:w-10"
          }
        >
          {item.id}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default ServiceLines;
